# Guide d'Installation et de Démarrage

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre système :

- **Node.js** : [Télécharger Node.js](https://nodejs.org/en/download/)
- **Python** : [Télécharger Python](https://www.python.org/downloads/)
- **Git** : [Télécharger Git](https://git-scm.com/downloads)

## 🚀 Installation

### 1. Cloner le repository

```bash
git clone https://github.com/Magiclogon/BreastCancerClassification-Website
cd BreastCancerClassification-Website
```

### 2. Configuration du Frontend

Naviguez vers le dossier frontend et installez les dépendances :

```bash
cd new_frontend
npm install
```

### 3. Configuration du Backend

#### Installation des dépendances Python

Installez les packages Python requis :

```bash
pip install fastapi>=0.68.0 uvicorn>=0.15.0 pydantic>=1.8.0 torch>=1.9.0 transformers>=4.11.0 googletrans==4.0.0-rc1
```

#### Téléchargement du modèle

1. Téléchargez le modèle depuis ce lien : [Télécharger le modèle](https://emiuniversity-my.sharepoint.com/:u:/g/personal/walid_housni_student_emi_ac_ma/EXIjLwvIs4ZBivx6KThjnF4Bq0i2CO0Pyi1TOkyHslFvMA?e=6opyS5)

2. Placez le modèle téléchargé dans le dossier suivant :
   ```
   backend/modern_bert_finetuned/
   ```

## 🏃 Démarrage de l'application

### 1. Lancer le Frontend

Ouvrez un terminal dans le dossier `new_frontend` et exécutez :

```bash
npm run dev
```

### 2. Lancer le Backend

Ouvrez un **nouveau terminal** dans le dossier `backend` et exécutez :

```bash
uvicorn --port 5000 server:app
```

### 3. Accéder à l'application

Ouvrez votre navigateur web et naviguez vers :

```
http://localhost:8080
```

## 📝 Notes importantes

- Assurez-vous que les deux serveurs (frontend et backend) sont en cours d'exécution simultanément
- Le frontend s'exécute sur le port 8080
- Le backend s'exécute sur le port 5000
- Vérifiez que tous les prérequis sont correctement installés avant de commencer