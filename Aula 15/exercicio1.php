<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado Final dos Alunos</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 20px;
        }
        .container {
            border: 1px solid #ccc;
            padding: 20px;
            width: 300px;
            border-radius: 8px;
        }
        h1 {
            color: #333;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 8px;
            border-bottom: 1px solid #eee;
        }
        .aprovado {
            color: green;
            font-weight: bold;
        }
        .reprovado {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Resultado Final</h1>
        <ul>
            <?php
        
            $notas = [35, 77, 65, 49, 28, 95];

        
            $mediaAprovacao = 60;

            
            foreach ($notas as $nota) {
    
                if ($nota >= $mediaAprovacao) {
                    $status = "Aprovado";
                    $classeCss = "aprovado";
                } else {
                    $status = "Reprovado";
                    $classeCss = "reprovado";
                }

                echo "<li>Nota: $nota - <span class='$classeCss'>$status</span></li>";
            }
            ?>
        </ul>
    </div>

</body>
</html>