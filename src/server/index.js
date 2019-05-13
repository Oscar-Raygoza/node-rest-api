import express from 'express';
import IndexRoutes from '../routes/index.routes';
import TaskRoutes from '../routes/tasks.routes';


const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
app.use(IndexRoutes);
app.use('/tasks',TaskRoutes);

export default app;