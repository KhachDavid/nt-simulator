import subprocess

def restart_apache():
    report = []

    # Restart Apache
    restart_command = "sudo systemctl restart apache2"
    subprocess.run(restart_command, shell=True)
    print("Apache restarted.")

    # Check Apache status
    status_command = "systemctl is-active --quiet apache2 && echo 'Apache is running' || echo 'Apache is not running'"
    status_process = subprocess.run(status_command, shell=True, capture_output=True, text=True)
    apache_status = status_process.stdout.strip()
    report.append(f"Apache Status: {apache_status}")

    # Check .htaccess file
    htaccess_path = "/var/www/app.davidk.tech/.htaccess"
    htaccess_backup = "/mnt/prod/.htaccess.bak"
    htaccess_diff_command = f"diff {htaccess_path} {htaccess_backup}"
    htaccess_diff_process = subprocess.run(htaccess_diff_command, shell=True, capture_output=True, text=True)
    htaccess_diff_output = htaccess_diff_process.stdout.strip()
    if htaccess_diff_output:
        report.append("Changes detected in .htaccess file:")
        report.append(htaccess_diff_output)
    else:
        report.append("No changes detected in .htaccess file.")

    return "\n".join(report)

result = restart_apache()
# write to stdout
print(result)
