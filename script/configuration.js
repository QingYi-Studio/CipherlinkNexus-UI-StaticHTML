document.addEventListener('DOMContentLoaded', function () {
    // 配置表单提交事件
    const configForm = document.getElementById('serverConfigForm');
    configForm.addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止表单默认提交行为

        // 获取表单数据
        const serverIP = document.getElementById('serverIP').value;
        const serverPort = document.getElementById('serverPort').value;

        // alert("Server IP: " + serverIP + "\nServer Port: " + serverPort);

        // 调用C#方法
        window.bound.ReceiveData(serverIP, parseInt(serverPort));
        // alert(serverIP + ":" + serverPort + " saved successfully!");
    });

    // 客户端配置表单提交事件
    const clientConfigForm = document.getElementById('clientConfigForm');
    clientConfigForm.addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止表单默认提交行为

        // 获取表单数据
        const remoteIP = document.getElementById('remoteIP').value;
        const remotePort = document.getElementById('remotePort').value;

        // alert("Remote IP: " + remoteIP + "\nRemote Port: " + remotePort);

        // 调用C#方法
        window.bound.ReceiveClientData(remoteIP, parseInt(remotePort));
        // alert(remoteIP + ":" + remotePort + " saved successfully!");
    });

    // 加密配置表单提交事件
    const cryptoForm = document.getElementById('cryptoForm');
    cryptoForm.addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止表单默认提交行为

        // 获取表单数据
        const cryptoKey = document.getElementById('cryptoKey').value;

        // alert("Crypto Key: " + cryptoKey);

        // 调用C#方法
        window.bound.ReceiveCryptoData(cryptoKey);
        // alert("Crypto Key saved successfully!");
    });
});
