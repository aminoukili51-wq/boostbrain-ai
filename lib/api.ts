export async function analyzeGame(data: any) {
  const res = await fetch("http://localhost:8000/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Backend error tijdens analyzeGame()");
  }

  return res.json();
}

export async function analyzeLastMatch() {
  const res = await fetch("http://localhost:8000/analyze-last", {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Backend error tijdens analyzeLastMatch()");
  }

  return res.json();
}

