const express = require('express');
const booksRouter = express.Router();
const authorRouter = express.Router();
const signupRouter = express.Router();
const loginRouter = express.Router();

const app = express();



app.use(express.static('./public'));

app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/author',authorRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

app.get('/',function(req,res){
    res.render("index",{
        nav:[{link: '/books',name:'Books'},{link:'/author',name:'author'},{link:'/signup',name:'signup'},{link:'/login',name:'Login'}],
        title:'LIBRARY'
    });
});

// book listed
var books = [
    {
        title: 'ONE INDIAN GIRL',
        author: 'Chetan Bhagat',
        genre: 'Novel',
        img: "One_indian_girl.jpg",
        readmore: 'One Indian Girl is the story of Radhika Mehta, a worker at the Distressed Debt group of Goldman Sachs, the investment bank. The book begins with Radhika making arrangements regarding her marriage with Brijesh Gulati who works in the Facebook company in San Francisco. She later reveals her childhood and life in Delhi, as a nerdy personality in contrast to her elder sister Aditi. She also communicates her thoughts and decisions to her inner judgemental voice, or "mini-me" as called.',
        order:'https://www.amazon.in/One-Indian-Girl-Chetan-Bhagat/dp/8129142147/ref=sr_1_2?keywords=one+in&qid=1583471541&sr=8-2',
        link:'https://en.wikipedia.org/wiki/Chetan_Bhagat'
},
{
    title: 'PINJAR',
    author: 'Amrita Pritam',
    genre: 'Novel',
    img: "Pinjar.jpg",
    readmore: 'Pinjar (English/Translation: The Skeleton) is a 1950 Punjabi novel written by noted poet and novelist Amrita Pritam.[1] It is the story of a Hindu girl, Puro, abducted by a Muslim man, Rashid[2]; Puros parents refuse to accept the defiled girl when she manages to escape from Rashids home. Pinjar is widely considered one of the outstanding works of Indian fiction set during the period of the Partition of India.',
    order:'https://www.amazon.in/Pinjar-Skeleton-Stories-Amrita-Pritam/dp/8183860974/ref=sr_1_1?crid=1IMAZADZ13GAM&keywords=pinjar+by+amrita+pritam+in+english&qid=1583491994&sprefix=pinjar%2Caps%2C371&sr=8-1',
    link:'https://en.wikipedia.org/wiki/Amrita_Pritam'
}, 
 {
    title: 'Low Land',
    author: 'Jhumpa Lahiri',
    genre: 'Novel',
    img: "Lowland.jpg",
    readmore:'Raised in Tollygunge in Calcutta, brothers Subhash and Udayan are inseparable; they find joy in fixing and listening to radios, learning Morse Code, and looking out for each other at school. When they leave home for university studies, their ideologies are challenged; Udayan embraces the Naxalite Movement while Subhash is more interested.',
    order:'https://www.amazon.in/Lowland-Jhumpa-Lahiri-2014-04-07/dp/B0169MGRWC/ref=sr_1_15?keywords=lowland+jhumpa&qid=1583493592&sr=8-15',
    link:'https://en.wikipedia.org/wiki/Jhumpa_Lahiri'

},
{
    title: 'Pather Dabi-The Right Of Way',
    author: 'Sarat Chandra Chattopadhyay',
    genre: 'Novel',
    img: "sarat.jpg",
    readmore: 'The book is about a secret society named Pather Dabi whose goal is to free India from British rule. The leader of the organization is Sabyasachi Mallick, who is described as being highly educated, having studied medicine, engineering, and law in Europe and America.[3][4] Sabyasachi is also endowed with physical strength and courage which enable him to elude British intelligence. His physical feats include swimming across a torrential river, and traversing the Eastern Himalayas on foot.',
    order:'https://www.amazon.in/Pather-Dabi-Sarat-Chandra-Chatterjee/dp/B07F81W18S/ref=asc_df_B07F81W18S/?tag=googleshopdes-21&linkCode=df0&hvadid=397082446778&hvpos=&hvnetw=g&hvrand=979694708570806465&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9050518&hvtargid=pla-888909239275&psc=1&ext_vrnc=hi',
    link:'https://en.wikipedia.org/wiki/Sarat_Chandra_Chattopadhyay'
},
{
    title: 'Jane eyre',
    author: 'Charlotte Brontë',
    genre: 'Novel',
    img: "Jane_Eyre.jpg",
    readmore: 'Jane Eyre /ɛər/ (originally published as Jane Eyre: An Autobiography) is a novel by English writer Charlotte Brontë, published under the pen name "Currer Bell", on 16 October 1847, by Smith, Elder & Co. of London. The first American edition was published the following year by Harper & Brothers of New York.[1] Jane Eyre follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall.',
    order:'https://www.amazon.in/Jane-Eyre-Charlotte-Bront%C3%AB/dp/8175993650/ref=sr_1_1_sspa?keywords=Jane+Eyre&qid=1583662033&s=books&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVjlXMDYzUzVPVEdPJmVuY3J5cHRlZElkPUEwNjc2NzcxM0tKVUNZT1VYWiZlbmNyeXB0ZWRBZElkPUEwMTQ0NzcxMlUzUzdBMTlKRVdHTyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
    link:'https://en.wikipedia.org/wiki/Charlotte_Bront%C3%AB'
}
]


booksRouter.get('/',function(req,res){
    res.render("books",{
        nav:[{link: '/books',name:'Books'},{link:'/author',name:'author'},{link:'/signup',name:'signup'},{link:'/login',name:'Login'}],
        title:'library',
        books
    });
});


authorRouter.get('/',function(req,res){
    res.render("author",{
        nav:[{link: '/books',name:'Books'},{link:'/author',name:'author'},{link:'/signup',name:'signup'},{link:'/login',name:'Login'}],
        title:'library'  
    });
});


signupRouter.get('/',function(req,res){
    res.render("signup",{
        nav:[{link: '/books',name:'Books'},{link:'/author',name:'author'},{link:'/signup',name:'signup'},{link:'/login',name:'Login'}],
        title:'library'  
    });
});



loginRouter.get('/',function(req,res){
    res.render("login",{
        nav:[{link: '/books',name:'Books'},{link:'/author',name:'author'},{link:'/signup',name:'signup'},{link:'/login',name:'Login'}],
        title:'library'  
    });
});

app.listen(5001);