
Why is it useful to create a reusable Axios instance?
- Using a reusable axios instance means that we will only have to create the base url, headers, timeout and cancellation once and worn't have have to repeat the whole process evertime we make a request. This helps clean up the code and enhance maintainance overtime and reduces the chances for errors. 

How does intercepting requests help with authentication?
- Interceptors add an authentication token to each request automatically which is helpfull as it eliminates the need for us to add the token manually everytime we make a call to secure the API. It eliminates the redundancy and helps make the code more secure by ensuring that we don't forget to add the token. 

What happens if an API request times out, and how can you handle it?
- If a request takes too much time to process, Axios will stop the request and out put a timeout error. This error can be handled using the try and catch function, which will allow us to display an error message or try process the request again. 