using Microsoft.AspNetCore.SignalR;
using ServerSide.Models;

public class ChatHub : Hub<IChatClient>
{
    public async Task SendMessage(ChatMessage message)
    {
        message.Message = message.Message + " is from Server";
        await Clients.All.ReceiveMessage(message);
    }
}

