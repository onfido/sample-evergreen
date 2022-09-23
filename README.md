# sample evergreen iframe
Demo app for iframe  scripts


For this mode at least a [SDK token](https://github.com/onfido/onfido-sdk-ui#3-generate-an-sdk-token) needs to be passed 
as `token` in the parameter object.

```js
window.handle = Onfido.init({
    token: "<YOUR SDK TOKEN>" // https://github.com/onfido/onfido-sdk-ui#3-generate-an-sdk-token
});
```
                                                                                                
## workflow

With orchestration onfido offers a more dynamic and flexible way of sending the user through the required steps. The best
way of using orchestration is to make use out of workflow_links.

Therefore create a workflow link via the api first

```http request
POST https://api.<region>.onfido.com/v4/workflow_links
Content-Type: application/json
Authorization: Token token=<YOUR API KEY>

{
    "workflow_id": "<WORKFLOW_ID>",
}
```

Then use the id of the response payload

```json
{
    "id": "<ID>",
    "applicant_id": "<APPLICANT_ID>",
    "expires": "2022-06-26T12:56:25.547952",
    "url": "https://studio.eu.onfido.app/l/<ID>",
    "workflow_id": "<WORKFLOW_ID>"
}
```

to bootstrap the sdk with the following javascript code

```js
window.handle = Onfido.init({
    workflowLinkId: "<ID>"
});
```

# Example
## static

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <script src="https://assets.onfido.com/web-sdk-client/client.js"></script>
    <script>
        window.handle = Onfido.init({
            token: "<YOUR SDK TOKEN>",
            onComplete: (outcome) => {
                console.log("complete", outcome)
            },
            
            steps: ["welcome", "face", "complete"],

            css: `
            html {
                background: repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px);
            }
            `
        })
    </script>
</body>
</html>
```

## workflow

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <script src="https://assets.onfido.com/web-sdk-client/client.js"></script>
    <script>
        window.handle = Onfido.init({
            workflowLinkId: "<WORKFLOW_LINK_ID>",
            region: "EU", // make sure to provide region "EU", "US", "CA"
            onComplete: (a) => {
              console.log(a)
            },
            `
        })
    </script>
</body>
</html>
```


