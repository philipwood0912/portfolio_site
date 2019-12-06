<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="data/contact.php" method="post">
    <label for="name">NAME</label>
    <input id="name" type="text" name="name" placeholder="name">
    <label for="email">EMAIL</label>
    <input id="email" type="email" name="email" placeholder="email">
    <label for="subject">SUBJECT</label>
    <input id="subject" type="text" name="subject" placeholder="subject">
    <label for="message">MESSAGE</label>
    <textarea id="message" name="message"></textarea>
    <button type="submit">SUBMIT</button>
    </form>
</body>
</html>