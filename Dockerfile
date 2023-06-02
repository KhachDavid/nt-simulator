# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the requirements file into the container
COPY server/requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Build the React app and collect static files
RUN cd client && npm install && npm run build && cd .. && python server/manage.py collectstatic --noinput

# Expose port 8000 for Django
EXPOSE 8000

# Start the Django development server
CMD ["python", "server/manage.py", "runserver", "0.0.0.0:8000"]
