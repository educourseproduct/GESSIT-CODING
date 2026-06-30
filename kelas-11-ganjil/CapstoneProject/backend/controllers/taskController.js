const Task = require('../models/Task');

// @desc    Get tasks for logged-in user
// @route   GET /api/tasks
exports.getTasks = async (req, res) => {
    try {
        // Only get tasks owned by the logged-in user
        const tasks = await Task.find({ owner: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create task
// @route   POST /api/tasks
exports.createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;

        if (!title) {
            return res.status(400).json({ message: 'Please add a title' });
        }

        const task = await Task.create({
            title,
            description,
            status: status || 'pending',
            owner: req.user.id // Set owner from JWT
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update task (With Owner Validation)
// @route   PUT /api/tasks/:id
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Check Owner Validation
        if (task.owner.toString() !== req.user.id) {
            return res.status(403).json({ message: 'User not authorized' });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete task (With Owner Validation)
// @route   DELETE /api/tasks/:id
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Check Owner Validation
        if (task.owner.toString() !== req.user.id) {
            return res.status(403).json({ message: 'User not authorized' });
        }

        await task.deleteOne();
        res.status(200).json({ message: 'Task removed', id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};