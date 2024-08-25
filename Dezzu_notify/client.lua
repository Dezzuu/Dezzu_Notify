exports('sendNotify', function(data) SendNUIMessage({action= 'Notify', desc = data}) end)


RegisterCommand('notify', function()
    exports['dezzu_notify']:sendNotify('Testowe powiadomienie')
end)