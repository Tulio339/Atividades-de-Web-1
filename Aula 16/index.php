<?php

require_once 'conexao.php';


$stmt = $pdo->query('SELECT * FROM colaboradores ORDER BY nome_completo ASC');
$colaboradores = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciamento de Colaboradores</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <div class="container">
        <h1>Gerenciamento de Colaboradores</h1>

        <form action="salvar.php" method="POST" class="form-container">
            <h2>Cadastrar / Editar Colaborador</h2>
            <input type="hidden" name="id" id="colaborador_id">
            
            <input type="text" name="nome_completo" id="nome_completo" placeholder="Nome Completo" required>
            
            <input type="tel" name="telefone" id="telefone" placeholder="Telefone (ex: (99) 99999-9999)">
            
            <input type="text" name="endereco" id="endereco" placeholder="Endereço Residencial">
            
            <input type="number" name="anos_experiencia" id="anos_experiencia" placeholder="Anos de Experiência em Programação" required min="0">
            
            <input type="number" name="salario" id="salario" placeholder="Salário Mensal (R$)" required min="0" step="0.01">
            
            <button type="submit">Salvar Colaborador</button>
        </form>

        <div class="table-container">
            <h2>Lista de Colaboradores</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome Completo</th>
                        <th>Telefone</th>
                        <th>Anos de Exp.</th>
                        <th>Salário</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($colaboradores as $colaborador): ?>
                        <tr>
                            <td><?= htmlspecialchars($colaborador['nome_completo']) ?></td>
                            <td><?= htmlspecialchars($colaborador['telefone']) ?></td>
                            <td><?= htmlspecialchars($colaborador['anos_experiencia']) ?></td>
                            <td>R$ <?= number_format($colaborador['salario'], 2, ',', '.') ?></td>
                            <td class="actions">
                                <button onclick="editarColaborador(
                                    <?= $colaborador['id'] ?>,
                                    '<?= htmlspecialchars(addslashes($colaborador['nome_completo']), ENT_QUOTES) ?>',
                                    '<?= htmlspecialchars(addslashes($colaborador['telefone']), ENT_QUOTES) ?>',
                                    '<?= htmlspecialchars(addslashes($colaborador['endereco']), ENT_QUOTES) ?>',
                                    <?= $colaborador['anos_experiencia'] ?>,
                                    <?= $colaborador['salario'] ?>
                                )">Editar</button>
                                
                                <a href="excluir.php?id=<?= $colaborador['id'] ?>" onclick="return confirm('Tem certeza que deseja excluir este colaborador?');">Excluir</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>

    <script>
        
        function editarColaborador(id, nome, telefone, endereco, experiencia, salario) {
            document.getElementById('colaborador_id').value = id;
            document.getElementById('nome_completo').value = nome;
            document.getElementById('telefone').value = telefone;
            document.getElementById('endereco').value = endereco;
            document.getElementById('anos_experiencia').value = experiencia;
            document.getElementById('salario').value = salario;
            window.scrollTo(0, 0); 
        }
    </script>
</body>
</html>