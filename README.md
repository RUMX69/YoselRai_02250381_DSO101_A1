## CI/CD Pipeline – DSO101 Assignment 2

### How I configured the pipeline
Created a Jenkinsfile with 4 stages: Checkout, Install Dependencies, 
Build, and Test. Jenkins pulls code from GitHub using a Personal Access 
Token and runs 4 Jest unit tests automatically.

### Challenges faced
- Jenkins runs on Windows so had to use `bat` instead of `sh` commands
- Jenkinsfile had to be placed in the todo-app subfolder and Script Path 
  updated accordingly in Jenkins configuration

### GitHub Repo
https://github.com/RUMX69/YoselRai_02250381_DSO101_A1
# YoselRai_02250381_DSO101_A1
https://github.com/RUMX69/YoselRai_02250381_DSO101_A1.git