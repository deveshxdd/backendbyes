const express = require('express')
const app = express()

app.set("view engine","ejs")
// ejs set krne ke lia 


app.use(express.static('./public')) 
// isse jo v file hoti h uske aage public jud jata hai 
// to baar baar likhne ki jrurt nhi hoti
// static file use krne ke lia

app.get('/',(req,res)=>{
res.render("file",{age:"welcome to the website"})  // isme .ejs naa kre
})
app.get('/contact',(req,res)=>{
res.render("contact")  // isme .ejs naa kre
})
app.listen('3300',()=>{
    console.log("server started")
})


// ejs html jaisa dikhne wla file hota hai
// ejs render krte time tum use controll v krskte ho
// <%=namekuchv%>
// html me aap dynamic value nhi add krskte lekin ejs me krskte ho
