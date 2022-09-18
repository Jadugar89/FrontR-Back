using ServerSide.SignalR_Hub;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


//Enable CORS
builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", options => options.WithOrigins("http://localhost:3000").AllowAnyMethod()
     .AllowAnyHeader().AllowCredentials()); 
});

builder.Services.AddSignalR();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();

app.UseCors(options => 
options.AllowAnyMethod()
       .AllowAnyHeader()
       .WithOrigins("http://localhost:3000")
       .AllowCredentials());
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();
app.MapHub<ChatHub>("/hubs/chat");
app.MapHub<TicTacToeHub>("/hubs/TicTacToe");
app.Run();
