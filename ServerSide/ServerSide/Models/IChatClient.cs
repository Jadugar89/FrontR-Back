namespace ServerSide.Models
{
    public interface IChatClient
    {
        Task ReceiveMessage(ChatMessage message);
    }
}
