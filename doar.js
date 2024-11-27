function mostrarMensagem() {
    var tipoSangue = document.getElementById("tiposangue").value;
    var mensagem = "";

    switch (tipoSangue) {
        case "a+":
            mensagem = "O banco de doação de sangue 1 está precisando de doações de sangue A-, mas caso não consiga ir, pode doar na Colsan!<br>Endereço da Colsan: Av. Comendador Pereira Inácio, 564 - Jardim Vergueiro, Sorocaba - SP, 18030-005<br>Horário de funcionamento: de Segunda a Sabado das 7:00 às 12:30. <br>Era a sua gota que faltava!<br><a href='https://colsan.org.br/site/' class='linkdeco' target='_blank'>Clique aqui para ser direcionado ao site da Colsan</a>";
            break;
        case "a-":
            mensagem = "O banco de doação de sangue 2 está precisando de doações de sangue A-, mas caso não consiga ir, pode doar na Colsan!<br>Endereço da Colsan: Av. Comendador Pereira Inácio, 564 - Jardim Vergueiro, Sorocaba - SP, 18030-005<br>Horário de funcionamento: de Segunda a Sabado das 7:00 às 12:30.<br>Era a sua gota que faltava!<br><a href='https://colsan.org.br/site/' class='linkdeco' target='_blank'>Clique aqui para ser direcionado ao site da Colsan</a>";
            break;
        case "b+":
            mensagem = "O banco de doação de sangue 3 está precisando de doações de sangue B+, mas caso não consiga ir, pode doar na Colsan!<br>Endereço da Colsan: Av. Comendador Pereira Inácio, 564 - Jardim Vergueiro, Sorocaba - SP, 18030-005<br>Horário de funcionamento: de Segunda a Sabado das 7:00 às 12:30.<br>Era a sua gota que faltava!<br><a href='https://colsan.org.br/site/' class='linkdeco' target='_blank'>Clique aqui para ser direcionado ao site da Colsan</a>";
            break;
        case "b-":
            mensagem = "O banco de doação de sangue 4 está precisando de doações de sangue B-, mas caso não consiga ir, pode doar na Colsan!<br>Endereço da Colsan: Av. Comendador Pereira Inácio, 564 - Jardim Vergueiro, Sorocaba - SP, 18030-005<br>Horário de funcionamento: de Segunda a Sabado das 7:00 às 12:30<br>Era a sua gota que faltava!<br><a href='https://colsan.org.br/site/' class='linkdeco' target='_blank'>Clique aqui para ser direcionado ao site da Colsan</a>";
            break;
        case "ab+":
            mensagem = "O banco de doação de sangue 5 está precisando de doações de sangue AB+, mas caso não consiga ir, pode doar na Colsan!<br>Endereço da Colsan: Av. Comendador Pereira Inácio, 564 - Jardim Vergueiro, Sorocaba - SP, 18030-005<br>Horário de funcionamento: de Segunda a Sabado das 7:00 às 12:30.<br>Era a sua gota que faltava!<br><a href='https://colsan.org.br/site/' class='linkdeco' target='_blank'>Clique aqui para ser direcionado ao site da Colsan</a>";
            break;
        case "ab-":
            mensagem = "O banco de doação de sangue 6 está precisando de doações de sangue AB-, mas caso não consiga ir, pode doar na Colsan!<br>Endereço da Colsan: Av. Comendador Pereira Inácio, 564 - Jardim Vergueiro, Sorocaba - SP, 18030-005<br>Horário de funcionamento: de Segunda a Sabado das 7:00 às 12:30.<br>Era a sua gota que faltava!<br><a href='https://colsan.org.br/site/' class='linkdeco' target='_blank'>Clique aqui para ser direcionado ao site da Colsan</a>";
            break;
        case "o+":
            mensagem = "O banco de doação de sangue 7 está precisando de doações de sangue O+, mas caso não consiga ir, pode doar na Colsan!<br>Endereço da Colsan: Av. Comendador Pereira Inácio, 564 - Jardim Vergueiro, Sorocaba - SP, 18030-005<br>Horário de funcionamento: de Segunda a Sabado das 7:00 às 12:30.<br>Era a sua gota que faltava!<br><a href='https://colsan.org.br/site/' class='linkdeco' target='_blank'>Clique aqui para ser direcionado ao site da Colsan</a>";
            break;
        case "o-":
            mensagem = "O banco de doação de sangue 8 está precisando de doações de sangue O-, mas caso não consiga ir, pode doar na Colsan!<br>Endereço da Colsan: Av. Comendador Pereira Inácio, 564 - Jardim Vergueiro, Sorocaba - SP, 18030-005<br>Horário de funcionamento: de Segunda a Sabado das 7:00 às 12:30.<br>Era a sua gota que faltava!<br><a href='https://colsan.org.br/site/' class='linkdeco' target='_blank'>Clique aqui para ser direcionado ao site da Colsan</a>";
            break;
    }

    document.getElementById("mensagemTipoSangue").innerHTML = mensagem;
}
