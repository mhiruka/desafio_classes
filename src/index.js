// Definição da classe Heroi
class Heroi {
    // Construtor que recebe nome, idade e tipo do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para o herói atacar
    atacar() {
      let ataque = '';
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque genérico';
      }
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Criação de um herói mago
  const mago = new Heroi('Merlin', 35, 'mago');
  mago.atacar();
  
  // Criação de um herói guerreiro
  const guerreiro = new Heroi('Conan', 40, 'guerreiro');
  guerreiro.atacar();
  
  // Criação de um herói monge
  const monge = new Heroi('Kung Fu Panda', 25, 'monge');
  monge.atacar();
  
  // Criação de um herói ninja
  const ninja = new Heroi('Hattori Hanzo', 30, 'ninja');
  ninja.atacar();
  