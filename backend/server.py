from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import BertForSequenceClassification, PreTrainedTokenizerFast
import torch
from googletrans import Translator
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Pouvoir communiquer entre le backend et frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"], 
)

# Charger le modele
model = BertForSequenceClassification.from_pretrained('./modern_bert_finetuned', num_labels=8)
tokenizer = PreTrainedTokenizerFast.from_pretrained("./modern_bert_finetuned")
translator = Translator()
model.eval()

# Équivalences BI-RADS
birads_mapping = {
    0: "2",
    1: "3",
    2: "4",
    3: "4a",
    4: "4b",
    5: "4c",
    6: "5",
    7: "6"
}

# Type de la requête
class ReportRequest(BaseModel):
    report: str

# Fonction principale de prédiction.
def predict_birads(report_text):

    detected_lang = translator.detect(report_text).lang.split('-')[0]
    if detected_lang != 'en':
        report_text = translator.translate(report_text, src=detected_lang, dest='en').text

    inputs = tokenizer(report_text, padding=True, truncation=True, max_length=512, return_tensors="pt")
    
    with torch.no_grad():
        outputs = model(**inputs)
        logits = outputs.logits

    predicted_class = torch.argmax(logits, dim=-1).item()
    return birads_mapping.get(predicted_class, 'Unknown')

@app.post("/predict")
async def predict(request: ReportRequest):
    try:
        predicted_birads = predict_birads(request.report)
        return {"result": predicted_birads}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

