<?php

require_once 'conexao.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);
    $nome_completo = filter_input(INPUT_POST, 'nome_completo', FILTER_SANITIZE_STRING);
    $telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
    $endereco = filter_input(INPUT_POST, 'endereco', FILTER_SANITIZE_STRING);
    $anos_experiencia = filter_input(INPUT_POST, 'anos_experiencia', FILTER_SANITIZE_NUMBER_INT);
    $salario = filter_input(INPUT_POST, 'salario', FILTER_VALIDATE_FLOAT, FILTER_FLAG_ALLOW_FRACTION);

   
    if (empty($nome_completo) || $anos_experiencia === false || $salario === false) {
        die("Erro: Por favor, preencha todos os campos obrigatórios corretamente.");
    }
    
    try {
        if (!empty($id)) {
          
            $sql = "UPDATE colaboradores SET nome_completo = :nome, telefone = :tel, endereco = :end, anos_experiencia = :exp, salario = :sal WHERE id = :id";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);

        } else {
           
            $sql = "INSERT INTO colaboradores (nome_completo, telefone, endereco, anos_experiencia, salario) VALUES (:nome, :tel, :end, :exp, :sal)";
            $stmt = $pdo->prepare($sql);
        }

     
        $stmt->bindParam(':nome', $nome_completo, PDO::PARAM_STR);
        $stmt->bindParam(':tel', $telefone, PDO::PARAM_STR);
        $stmt->bindParam(':end', $endereco, PDO::PARAM_STR);
        $stmt->bindParam(':exp', $anos_experiencia, PDO::PARAM_INT);
        $stmt->bindParam(':sal', $salario);

        $stmt->execute();

      
        header("Location: index.php");
        exit();

    } catch (PDOException $e) {
        die("Erro ao salvar o colaborador: " . $e->getMessage());
    }
} else {
  
    header("Location: index.php");
    exit();
}
?>