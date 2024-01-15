Explanation of working of terraform:
1.	Provider block to get aws version and initialize terraform
2.	Resource block for s3 bucket creation
3.	Variable block to give bucket name
4.	Resource block for ownership controls
5.	Resource block for public access block 
6.	Resource block for acl public-read
7.	Resource blocks for adding index.html, error.html, style.css, script.js
8.	Resource block for website configurations
9.	Output block to get website endpoint

CLI Commands to run project:
1.	Create an IAM user to get credentials 
2.	AWS configure – to enter access key and secret access key from IAM user 
3.	Terraform init 
4.	Terraform plan
5.	Terraform apply -auto-approve
6.	Terraform destroy -auto-approve
