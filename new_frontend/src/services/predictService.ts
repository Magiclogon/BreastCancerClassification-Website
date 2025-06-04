
interface PredictionResponse {
  result: string;
}

interface ErrorResponse {
  detail: string;
}

const API_BASE_URL = 'http://localhost:5000';


const predictBirads = async (reportText: string): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        report: reportText,
      }),
    });

    if (!response.ok) {
      const errorData: ErrorResponse = await response.json();
      throw new Error(errorData.detail || 'Failed to get BIRADS prediction');
    }

    const data: PredictionResponse = await response.json();
    return data.result;

  } catch (error) {
    console.error('Error predicting BIRADS:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'An unknown error occurred during BIRADS prediction'
    );
  }
};

export default {
  predictBirads,
}