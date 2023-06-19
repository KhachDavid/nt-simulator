import subprocess

def rollback_commit(commit_hash):
    # Roll back the changes introduced by the specified commit
    rollback_command = f"git revert {commit_hash} --no-edit"
    subprocess.run(rollback_command, shell=True)

# Provide the commit hash you want to roll back
commit_hash = input("Enter the commit hash you want to roll back: ")

# Call the function to roll back the specified commit
rollback_commit(commit_hash)
