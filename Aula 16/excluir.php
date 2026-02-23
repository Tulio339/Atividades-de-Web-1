<?php


require_once 'conexao.php';

$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);

if (!empty($id)) {
    try {
       
        $sql = "DELETE FROM colaboradores WHERE id = :id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        
   
        header("Location: index.php");
        exit();

    } catch (PDOException $e) {
        die("Erro ao excluir o colaborador: " . $e->getMessage());
    }
} else {

    header("Location: index.php");
    exit();
}
?>