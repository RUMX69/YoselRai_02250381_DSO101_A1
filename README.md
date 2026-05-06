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

## CI/CD Pipeline – DSO101 Assignment 2

### How I configured the pipeline
I created a Jenkinsfile with 4 stages: Checkout, Install Dependencies, 
Build, and Test. Jenkins pulls the code from GitHub using a Personal 
Access Token (PAT), installs npm packages, runs a build step, and 
executes 4 Jest unit tests automatically on every build.

### Challenges faced
- Jenkins runs on Windows, so had to replace all `sh` commands with 
  `bat` commands in the Jenkinsfile
- Jenkinsfile was inside the todo-app subfolder so had to update the 
  Script Path in Jenkins configuration to `todo-app/Jenkinsfile`
- Docker Pipeline plugin had missing dependencies so removed the Docker 
  stage from Jenkins and pushed the image manually instead

### GitHub Repo
https://github.com/RUMX69/YoselRai_02250381_DSO101_A1

### Docker Hub Images
- https://hub.docker.com/r/yoselrai/be-todo
- https://hub.docker.com/r/yoselrai/fe-todo

# YoselRai_02250381_DSO101_A1
https://github.com/RUMX69/YoselRai_02250381_DSO101_A1.git