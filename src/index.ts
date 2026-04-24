import express, { Request, Response } from 'express';
import { suma, resta } from './operaciones';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

// ----------------------- Endpoint para suma -----------------------
app.post('/suma', (req: Request, res: Response) => {
  const { a, b } = req.body;

  // Validar que a y b sean números
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'a y b deben ser números' });
  }

  try {
    const resultado = suma(a, b);
    return res.status(200).json({ operacion: 'suma', a, b, resultado });
  } catch (err) {
    const mensaje = err instanceof Error ? err.message : 'Error desconocido';
    return res.status(400).json({ error: mensaje });
  }
});


// ----------------------- Endpoint para resta -----------------------
app.post('/resta', (req: Request, res: Response) => {
  const { a, b } = req.body;

  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'a y b deben ser números' });
  }

  try {
    const resultado = resta(a, b);
    return res.status(200).json({ operacion: 'resta', a, b, resultado });
  } catch (err) {
    const mensaje = err instanceof Error ? err.message : 'Error desconocido';
    return res.status(400).json({ error: mensaje });
  }
});

app.listen(PORT, () => {
  console.log(`Calculadora API corriendo en puerto ${PORT}`);
});

export default app;