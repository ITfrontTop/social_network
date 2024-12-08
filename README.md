# React + Vite

json
/\*
http://localhost:3000/users?\_per_page=2&\_page=3

где:
\_per_page=2 количество файлов на странице
\_page=3 номер страницы

{
"first": 1,
"prev": 2,
"next": 4,
"last": 23,
"pages": 23,
"items": 45,
"data": [
{
"name": "Ira",
"id": "124",
"uniqueUrlName": null,
"photos": {
"small": null,
"large": null
},
"status": "Коли щось розумієш, то жити стає легше. А коли щось відчуєш – то важче. Але чомусь завжди хочеться відчути, а не розуміти!",
"followed": false,
"location": {
"city": "Kiev",
"country": "Ukraine"
}
},
{
"name": "Maria",
"id": "125",
"uniqueUrlName": null,
"photos": {
"small": null,
"large": null
},
"status": "О, ти це бачив? Це життя повз проходить …",
"followed": false,
"location": {
"city": "Kiev",
"country": "Ukraine"
}
}
]
}

http://localhost:3000/profile?userId=122

Выдает нам значения юзера с userId 122
