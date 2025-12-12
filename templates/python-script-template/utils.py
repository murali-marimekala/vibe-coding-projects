"""
Utility functions
Use GitHub Copilot to generate helper functions
"""

import logging


def setup_logging(verbose=False):
    """
    Setup logging configuration
    Copilot prompt: "Create logging setup function with verbose option"
    """
    level = logging.DEBUG if verbose else logging.INFO
    
    logging.basicConfig(
        level=level,
        format='%(asctime)s - %(levelname)s - %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S'
    )
    
    return logging.getLogger(__name__)


def process_data(input_path):
    """
    Process data from input file
    Copilot prompt: "Create function to read and process data from a file"
    """
    try:
        with open(input_path, 'r') as f:
            data = f.read()
        
        # Process the data
        # Add your processing logic here
        result = data.upper()  # Example transformation
        
        return result
    except FileNotFoundError:
        raise FileNotFoundError(f'Input file not found: {input_path}')
    except Exception as e:
        raise Exception(f'Error processing data: {e}')


def validate_input(data):
    """
    Validate input data
    Copilot prompt: "Create validation function with common checks"
    """
    if not data:
        raise ValueError('Input data cannot be empty')
    
    # Add more validation as needed
    return True


# Add more utility functions as needed
# Let Copilot help you generate them based on your requirements
