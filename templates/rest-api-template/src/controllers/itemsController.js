/**
 * Items controller
 * Use GitHub Copilot to generate controller functions
 * Prompt: "Create CRUD controller functions with error handling"
 */

// In-memory data store (replace with database in production)
let items = [
  { id: 1, name: 'Sample Item', description: 'This is a sample item' }
];
let nextId = 2;

/**
 * Get all items
 */
exports.getAllItems = (req, res) => {
  res.json({
    success: true,
    count: items.length,
    data: items
  });
};

/**
 * Get item by ID
 */
exports.getItemById = (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  
  if (!item) {
    return res.status(404).json({
      success: false,
      error: 'Item not found'
    });
  }
  
  res.json({
    success: true,
    data: item
  });
};

/**
 * Create new item
 */
exports.createItem = (req, res) => {
  const { name, description } = req.body;
  
  if (!name) {
    return res.status(400).json({
      success: false,
      error: 'Name is required'
    });
  }
  
  const newItem = {
    id: nextId++,
    name,
    description: description || ''
  };
  
  items.push(newItem);
  
  res.status(201).json({
    success: true,
    data: newItem
  });
};

/**
 * Update item
 */
exports.updateItem = (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  
  if (!item) {
    return res.status(404).json({
      success: false,
      error: 'Item not found'
    });
  }
  
  const { name, description } = req.body;
  
  if (name) item.name = name;
  if (description) item.description = description;
  
  res.json({
    success: true,
    data: item
  });
};

/**
 * Delete item
 */
exports.deleteItem = (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: 'Item not found'
    });
  }
  
  items.splice(index, 1);
  
  res.json({
    success: true,
    message: 'Item deleted successfully'
  });
};
