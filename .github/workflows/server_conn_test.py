import os
import paramiko
import select
import requests


def main():
    print("Begin python script")

    # host = os.environ.get("HOST")
    # username = os.environ.get("USERNAME")
    # password = os.environ.get("PASSWORD")
    # passphrase = os.environ.get("PASSPHRASE")
    # privatekey = os.environ.get("PRIVATEKEY")
    # sftpRemoteDirectory = os.environ.get("REMOTEPATH")
    # jobToken = os.environ.get("JOBTOKEN")

    # apiUrl = f"https://api.github.com/repos/3zbyjd/rlomuniv/actions/artifacts"
    # artifactData = requests.get(apiUrl).json()

    # print(artifactData)


if __name__ == "__main__":
    main()

# def main():
#     print("Hello from GitHub Actions!")
#     host = os.environ.get("HOST")

#     if not host:
#         raise RuntimeError("HOST env var is not set!")
#     print("Host = ", host)

#     if __name__ == "__main__":
#         main()
#     else:
#         print("Procedure did not run")
