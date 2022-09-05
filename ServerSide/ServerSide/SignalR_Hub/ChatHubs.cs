using Microsoft.AspNetCore.SignalR;
using ServerSide.Models;

public class ChatHub : Hub<IChatClient>
{
    public async Task SendMessage(ChatMessage message)
    {
        await Clients.All.ReceiveMessage(message);
    }
}

