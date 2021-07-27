# Add Python and Linux Version
FROM python:3.10.0a1-alpine3.12

COPY requirements.txt /app/requirements.txt

# Configure Server
RUN set -ex \
    && pip install --no-cache-dir -r /app/requirements.txt


# Working Directory
WORKDIR /app

ADD . .

#EXPOSE 8000

#CMD ["gunicorn", "--bind", ":8000", "--workers", "3", "core.wsgi:application"]
CMD gunicorn core.wsgi:application --bind 0.0.0.0:$PORT
