const AddUser = document.getElementById("AddUser");
AddUser.addEventListener("click", () => {
    window.location.href = "discord://-/users/1096549144287527022";
});



fetch('https://discord.com/api/v9/invites/KcAC6uD958?with_counts=true&with_expiration=true')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes acceder a los datos del JSON (almacenados en la variable 'data')

    document.getElementById('Total').innerHTML = "⚫" + data.approximate_member_count + " miembros";
    document.getElementById('Online').innerHTML = "🟢" + data.approximate_presence_count + " en línea";
    document.getElementById('ServerTitle').innerHTML = data.guild.name;
    document.getElementById("LogoServer").src='https://cdn.discordapp.com/icons/'+ data.guild.id+ '/' + data.guild.icon+'.webp';
    document.getElementById('ServerInvite').href='https://discord.com/invite/'+data.code;
})
.catch(error => {
    console.error('Error al obtener el JSON:', error);
}); 