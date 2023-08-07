using ServerSide.SignalR_Hub;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSignalR();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.UseCors(corsbuilder =>
{
    var orgins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>();
    corsbuilder.WithOrigins(orgins)
        .AllowAnyHeader()
        .WithMethods("GET", "POST")
        .AllowCredentials();
});

app.MapControllers();
app.MapHub<ChatHub>("/hubs/chat");
app.MapHub<TicTacToeHub>("/hubs/TicTacToe");
app.Run();
