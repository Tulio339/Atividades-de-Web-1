<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Exercicio 3</h1>
    <table>
     <thead>

       <tr>
       <th>nome </th>
       <th>Preço</th>
       <th>Quantidade</th>
       </tr>

     </thead>
      <?php

      $table = array(array("nome"=> "Apple","Preco"=>"R$ 5.99","Quantidade"=>"10"),

      array("nome"=> "Banana","Preco"=>"R$ 8.99","Quantidade"=>"3"),
      
      array("nome"=> "Kiwi","Preco"=>"R$ 17.99","Quantidade"=>"8")
      
    
    );

      foreach($table as $valor){

        echo '<tr>';
           echo '<td>' ;
           echo $valor["nome"].'</td>';
    
          echo '<td>';
          echo $valor["Preco"].'</td>';
  
          echo '<td>';
          echo $valor["Quantidade"].'</td>';
        echo '</tr>';
        
      }

    ?>

    </table>
</body>
</html>