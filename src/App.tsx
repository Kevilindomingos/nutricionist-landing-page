
import { Heart, Leaf, Shield, Star, Users, Zap, Instagram, Mail, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { useState, FormEvent } from "react";

function App() {
  const [nome, setNome] = useState<string>("");
  const [mensagem] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome) {
      alert("Por favor, preencha seu nome");
      return;
    }

    const text = `Olá, meu nome é ${nome} e gostaria de agendar uma consulta. ${mensagem}`;

    // Abrir WhatsApp
    window.open(
      `https://wa.me/5599999999999?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto e Botões */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Transforme sua relação com a 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-rose-500"> comida</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubra como nutrir seu corpo com amor e alcançar o bem-estar 
                que você merece, sem dietas restritivas ou culpa.
              </p>
            </div>

            {/* Formulário direto no Hero */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-6">
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-1"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enviar WhatsApp
              </button>
            </form>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-rose-200 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-emerald-200 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-amber-200 border-2 border-white"></div>
              </div>
              <span className="text-gray-600 font-medium">+200 mulheres transformadas</span>
            </div>
          </div>

          {/* Imagem Hero */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/20 to-rose-200/20 rounded-3xl transform rotate-6"></div>
            <img 
              src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Mulher confiante e saudável"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-100 p-2 rounded-full">
                  <Heart className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Bem-estar real</p>
                  <p className="text-sm text-gray-600">Sem dietas extremas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Nutricionista */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Dra. Marina Silva"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -top-4 -right-4 bg-rose-100 p-3 rounded-full">
                <Leaf className="w-6 h-6 text-rose-600" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Olá, eu sou a Dra. Marina Silva
                </h2>
                <p className="text-emerald-600 font-semibold text-lg mb-4">
                  Nutricionista | CRN 12345 | Especialista em Saúde Feminina
                </p>
              </div>
              
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Há mais de 8 anos dedico minha carreira a ajudar mulheres a descobrirem 
                  que é possível ter uma vida saudável sem abrir mão do prazer de comer.
                </p>
                <p>
                  Minha missão é simples: <span className="font-semibold text-emerald-600">
                  transformar a relação das mulheres com a comida</span>, criando um caminho 
                  sustentável para o bem-estar que respeita suas necessidades individuais 
                  e seu estilo de vida.
                </p>
                <p>
                  Acredito que cada mulher merece se sentir confiante e saudável, 
                  sem culpa ou restrições extremas.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-50 to-rose-50 p-6 rounded-2xl">
                <p className="text-gray-700 italic">
                  "Meu objetivo é que você se sinta livre para viver plenamente, 
                  com energia e autoestima, enquanto nutre seu corpo com amor."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia / Diferencial */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Uma abordagem que realmente funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esqueça as dietas da moda. Minha metodologia combina ciência, 
              individualidade e muito acolhimento para resultados duradouros.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Plano Individualizado</h3>
              <p className="text-gray-600">
                Cada plano é único, criado especialmente para seu corpo, 
                rotina e preferências alimentares.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sem Terrorismo</h3>
              <p className="text-gray-600">
                Aqui não existe "alimento proibido". Trabalho com educação 
                nutricional e equilíbrio real.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Suporte Contínuo</h3>
              <p className="text-gray-600">
                Acompanhamento humanizado com ajustes constantes para 
                garantir seus resultados.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Meus Diferenciais
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Atendimento Online e Presencial</h4>
                  <p className="text-gray-600">Flexibilidade total para sua rotina</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Foco em Resultados Sustentáveis</h4>
                  <p className="text-gray-600">Mudanças que se mantêm a longo prazo</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Receitas Práticas e Saborosas</h4>
                  <p className="text-gray-600">Cardápios que cabem na sua vida real</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Especialização em Saúde Feminina</h4>
                  <p className="text-gray-600">Entendo as necessidades únicas da mulher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Reais */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              O que você vai conquistar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Muito mais que perda de peso. Vamos trabalhar juntas para 
              transformar sua vida de forma integral.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mais Energia</h3>
              <p className="text-gray-600">
                Desperte com disposição e mantenha o pique durante todo o dia
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-rose-100 to-rose-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Equilíbrio Hormonal</h3>
              <p className="text-gray-600">
                Ciclos regulares e sintomas da TPM mais amenos
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Autoestima Elevada</h3>
              <p className="text-gray-600">
                Sinta-se confiante e confortável em seu próprio corpo
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Peso Ideal</h3>
              <p className="text-gray-600">
                Alcance e mantenha seu peso de forma natural e saudável
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Histórias de transformação
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que minhas pacientes têm a dizer sobre sua jornada
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150" 
                  alt="Ana"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Ana Carolina</h4>
                  <p className="text-gray-600">Executiva, 34 anos</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Finalmente encontrei uma nutricionista que me entende! 
                Perdi 15kg sem passar fome e ainda aprendi a cozinhar. 
                Minha energia voltou e me sinto incrível."
              </p>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150" 
                  alt="Carla"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Carla Mendes</h4>
                  <p className="text-gray-600">Professora, 28 anos</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "A Dra. Marina me ajudou a resolver problemas que eu tinha 
                há anos com minha digestão. Além disso, minha TPM melhorou 
                muito! Recomendo de olhos fechados."
              </p>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150" 
                  alt="Julia"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Júlia Santos</h4>
                  <p className="text-gray-600">Mãe e empresária, 41 anos</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Mesmo com a correria da maternidade e trabalho, 
                consegui me cuidar seguindo as orientações. 
                O melhor é que posso comer de tudo sem culpa!"
              </p>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Secundária */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Comece hoje sua jornada de bem-estar
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Não espere mais para ter a vida saudável que você merece. 
            Clique abaixo e marque sua primeira consulta.
          </p>
          <button
  onClick={() => {
  const mensagem = `Gostaria de agendar minha consulta!`;

    const text = `${mensagem}`;
    window.open(
      `https://wa.me/5599999999999?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }}
  className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
>
  <span>Quero começar agora</span>
  <ArrowRight className="w-5 h-5" />
</button>
        </div>
      </section>

      {/* Plano / Consulta */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Como funciona a consulta
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo simples e acessível para você começar sua transformação
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-emerald-100 text-emerald-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Primeira Consulta</h3>
                  <p className="text-gray-600">
                    Conversamos sobre seus objetivos, histórico e rotina. 
                    Pode ser presencial ou online, como preferir.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="bg-rose-100 text-rose-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Plano Personalizado</h3>
                  <p className="text-gray-600">
                    Criaremos juntas um plano alimentar único, com receitas 
                    práticas que se adaptam à sua vida.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Acompanhamento Contínuo</h3>
                  <p className="text-gray-600">
                    Consultas de retorno para ajustar o plano e garantir 
                    que você está no caminho certo.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-rose-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Modalidades Disponíveis</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Consulta Presencial</h4>
                  <p className="text-gray-600 mb-3">
                    Atendimento no consultório com avaliação completa
                  </p>
                  <p className="text-emerald-600 font-semibold">Agendamento flexível</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Consulta Online</h4>
                  <p className="text-gray-600 mb-3">
                    Atendimento por videochamada, ideal para quem tem pouco tempo
                  </p>
                  <p className="text-emerald-600 font-semibold">Mesma qualidade, mais praticidade</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-emerald-100 rounded-xl">
                <p className="text-emerald-800 text-center font-medium">
                  🎯 Primeira consulta com desconto especial para novos pacientes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Dra. Marina Silva</h3>
              <p className="text-gray-300 mb-6">
                Nutricionista especializada em saúde feminina e bem-estar sustentável. 
                Transformando vidas através de uma alimentação consciente e amorosa.
              </p>
              <p className="text-sm text-gray-400">
                CRN: 12345 | Formação: Universidade Federal de Nutrição
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Entre em Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    marina@nutricionista.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="w-5 h-5 text-emerald-400" />
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    @drmarinanutricionista
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Informações Importantes</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p>📍 Consultório: Rua da Saúde, 123 - São Paulo/SP</p>
                <p>⏰ Atendimento: Seg à Sex, 8h às 18h</p>
                <p>🔒 Atendimento online disponível</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 Dra. Marina Silva - Todos os direitos reservados
              </p>
              <p className="text-gray-500 text-xs text-center">
                ⚠️ Este site não substitui uma consulta médica. 
                Procure sempre orientação profissional para questões de saúde.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;