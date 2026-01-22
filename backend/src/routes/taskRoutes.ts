import { Router } from 'express';
import { 
  createTask, 
  getTasks, 
  getTask, 
  updateTask, 
  deleteTask 
} from '../controllers/taskController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

// Apply auth middleware to all task routes
router.use(authenticate);

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
