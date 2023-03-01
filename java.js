* {
  border: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{

  background-image: linear-gradient(to left,#00a4dd, #37ccfd, #2ca9d3, #77ebff);
  background-size: 500% 100%;
  animation: degrade-animado 6s infinite ease alternate;
}

@keyframes degrade-animado{
  0% {
      background-position-x: 0%;
  }
  100%{
      background-position-x: 100%;
  }
}
.leaderboard {
  max-width: 0;
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: 2px 2px 16px 1px #f4f4f5cb;
  font-family: 'Montserrat', sans-serif;
  
  
}
table{
  justify-content: center;
  display: none;
}
table.active{
  display: table;
}


a {
  text-decoration: none;
  color: inherit;
}

header {
  background-color: #00a4dd;
  color: white;
  text-transform: uppercase;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  height: 14rem;
  position: relative;
}


h1 {
  font-size: 3rem;
  line-height: 3rem;
  position: absolute;
  margin-left: 3rem;
  top: 2rem;
}

img {
  height: 10rem;
  position: absolute;
  bottom: -90px;
  right: -30px;
}

nav {
  width: 100%;
  position: absolute;
  bottom: 0;
  font-size: 1.3rem;
  
}

nav a {
  padding-top: 1rem;
  padding-bottom: 0.75rem;
  display: inline-block;
  font-weight: bold;
}

nav a.active {
  display: inline-flex;
  border-bottom: 4px solid #f0a900;
}

nav a:first-child {
  margin-left: 2rem;
}

nav a+a {
    padding: 1rem;
}

table {
  
  background-color: #16181e;
  color: #999;
  width: auto;
  border-collapse: collapse;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  height: 14rem;
 
  
}
table.active{
  display: table;

}

table.total tbody{

  height: 50px;
  max-width: 300px;
  
}

thead {
 
  font-size: 1rem;
  color: #555;
  text-transform: uppercase;
}

tbody .nick {
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
}

tbody tr:nth-child(2n) {
  background-color: #1f232c;
}

.nick {
  text-align: left;

}

.rank,
.sp,
.kd {
  font-size: 1.3rem;
  text-align: center;
  
  
}


.rank {
  padding-left: 1rem;
}

.sp,
.kd {
  width: 14ch;
  
}

th {
  padding: 1.5rem 1rem 0.5rem;
}

td {
  padding: 1rem 1rem;
}

@media screen and (max-width: 800px) {
  .leaderboard {
    display: block;
    align-items: center;
    max-width: 100%;
    margin: 8rem auto;
    margin-left: 1rem;
    scale: 0.9;


    
  }
  

  table {
    max-width: 100%;
    margin: 0 auto;
    display: none;
    background-color: #16181e;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    height: auto;
  }
  table#table-comissoes.comissao.active {
    justify-items: center;
    height: 4rem;
  }

  table.active {
    display: table;
    max-width: 1200px;
    min-width: 300px;
  }
  table.total{
    justify-content: center;
  
  
  }
  tbody td {
    padding: 0.5rem 0.5rem;

  }
  
  header {
    box-shadow: 0px -12px 20px 0px #ffffff63;
    height: 9rem;
    max-width: 1200px;
    min-width: 300px;
    
  }

  


  h1 {
    font-size: 2.5rem;
    line-height: 2.4rem;
    left: -2rem;
    top: 1rem;
    text-align: left;
    
  }
  

  nav a.active {
    display: inline-flex;
    border-bottom: 4px solid #f0a900;
  }
  nav a:first-child {
    margin-left: 1rem ;
  }

  img {
    height: 15rem;
    bottom: -3rem;
    left: 176px;
  }
  
  tbody{
    height: auto;
  }
  tr {
    font-size: 0.8rem;
    height: 0rem;
  }
  .rank{
    font-size: 0.8rem;
  }
  .sp {
    font-size: 0.8rem;
  }
  .kd {
    font-size: 0.8rem;
  }

  th {
    padding: 1rem 0.5rem 0.5rem;
  }
  tbody .nick {
    font-size: 0.8rem;
  }
 

  td {
    padding: 0.5rem 0.5rem;
    max-width: 100px;
  }
  nav {
    background: linear-gradient(to bottom, transparent, transparent 10%, rgba(22, 22, 22, 0.5));
    font-size: 0.9rem;
    padding-top: 10px;
  }

 
}

/* Regras de estilo para telas maiores ou iguais a 800px de largura */

@media (min-width: 768px) {

  .leaderboard {
    margin: 4rem auto;
    max-width: 600px;

  }
  
  h1 {
    font-size: 4rem;
    line-height: 4rem;
    margin-left: 2rem;
    text-align: left;
  }
  
  img {
    height: 14rem;
    right: -3rem;
    bottom: 3rem;
  }

  }
  
  tbody {
    height: 300px;
    border-radius: 1rem;
  }

  th {
    padding: 1.5rem 1rem 0.5rem;
  }

  td {
    padding: 1rem 1rem;
  }
  


   
 
