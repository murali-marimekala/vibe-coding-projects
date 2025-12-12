# Project Templates

Quick-start templates for common project types. Use these as starting points for your GitHub Copilot-assisted projects.

## Available Templates

### 1. **Basic Web App** (`web-app-template/`)
A simple template for web applications with HTML, CSS, and JavaScript.

### 2. **Node.js CLI** (`nodejs-cli-template/`)
Template for building command-line tools with Node.js.

### 3. **Python Script** (`python-script-template/`)
Basic structure for Python utility scripts.

### 4. **REST API** (`rest-api-template/`)
Starter template for building RESTful APIs.

## Using a Template

1. **Copy the template:**
   ```bash
   cp -r templates/[template-name] projects/[category]/[your-project-name]
   ```

2. **Navigate to your project:**
   ```bash
   cd projects/[category]/[your-project-name]
   ```

3. **Customize:**
   - Update the README.md with your project details
   - Modify package.json/requirements.txt with your project name
   - Start coding with GitHub Copilot!

4. **Initialize (if needed):**
   ```bash
   # For Node.js projects
   npm install
   
   # For Python projects
   pip install -r requirements.txt
   ```

## Creating Your Own Template

If you've developed a useful project structure:

1. Create a new directory in `templates/`
2. Add a comprehensive README.md
3. Include all boilerplate files
4. Add placeholder comments for Copilot prompts
5. Submit a PR to share with others!

## Template Guidelines

Good templates should:
- Be minimal but complete
- Include clear documentation
- Have a logical file structure
- Include example Copilot prompts in comments
- Work out of the box after setup

## Questions?

See the main [CONTRIBUTING.md](../CONTRIBUTING.md) for more details on contributing.
