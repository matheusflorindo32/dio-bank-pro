import { Globe } from './components/Globe';
import { motion } from 'framer-motion';
import { Github, ArrowRight, Terminal, Shield, Gift, Building2, User, Code2, Zap, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050505]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] bg-clip-text text-transparent">
            DIO Bank Pro
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-gray-400 hover:text-[#00f5d4] transition-colors text-sm">Funcionalidades</a>
            <a href="#stack" className="text-gray-400 hover:text-[#00f5d4] transition-colors text-sm">Tech Stack</a>
            <a href="https://github.com/matheusflorindo32/dio-bank-pro" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] text-black rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00f5d4] text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-pulse"></span>
              Sistema Bancário em TypeScript
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Premium Banking{' '}
              <span className="bg-gradient-to-r from-[#00f5d4] via-[#00bbf9] to-[#9b5de5] bg-clip-text text-transparent">
                System
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Clean Architecture, SOLID, OOP avançado e 39 testes automatizados. 
              Uma evolução profissional do desafio DIO Bank.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/matheusflorindo32/dio-bank-pro" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-[#00f5d4]/25 transition-all">
                <Github size={18} />
                Ver no GitHub
                <ArrowRight size={16} />
              </a>
              <a href="#terminal" className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-xl font-semibold hover:border-[#00f5d4] hover:text-[#00f5d4] transition-all">
                Quick Start
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f5d4]/20 to-[#9b5de5]/20 blur-3xl rounded-full"></div>
            <Globe />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '39', label: 'Testes Automatizados' },
            { number: '4', label: 'Camadas de Arquitetura' },
            { number: '100%', label: 'TypeScript Strict' },
            { number: '3', label: 'Tipos de Conta' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Arquitetura de Produção</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cada funcionalidade implementada com rigor técnico e padrões enterprise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: User, title: 'Conta Pessoal', desc: 'Depósitos, saques e histórico completo de transações com validações robustas de domínio.' },
              { icon: Building2, title: 'Conta Empresarial', desc: 'Empréstimos empresariais até R$ 10.000 com controle de limites e aprovação automática.' },
              { icon: Gift, title: 'Conta Bônus', desc: '+10% de bônus em todo depósito automaticamente. Recompensa programada via regra de negócio.' },
              { icon: Shield, title: 'Validações de Domínio', desc: 'Erros tipados: saldo insuficiente, conta inativa, valor inválido, conta encerrada.' },
              { icon: Code2, title: 'Clean Architecture', desc: '4 camadas isoladas: Domain, Application, Infrastructure, Presentation. Independência garantida.' },
              { icon: Zap, title: 'CI/CD Pipeline', desc: 'GitHub Actions com lint, testes e typecheck automáticos em cada pull request.' },
            ].map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00f5d4]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5d4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 rounded-xl bg-[#00f5d4]/10 border border-[#00f5d4]/20 flex items-center justify-center mb-6">
                  <feature.icon className="text-[#00f5d4]" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal */}
      <section id="terminal" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Start</h2>
            <p className="text-gray-400">Clone, instale e execute em segundos</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0f] shadow-2xl"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-gray-500">bash — dio-bank-pro</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#00f5d4]">$</span>
                <span className="text-gray-300">git clone https://github.com/matheusflorindo32/dio-bank-pro.git</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#00f5d4]">$</span>
                <span className="text-gray-300">cd dio-bank-pro</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#00f5d4]">$</span>
                <span className="text-gray-300">npm install</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#00f5d4]">$</span>
                <span className="text-gray-300">npm run dev</span>
              </div>
              <div className="text-[#00bbf9] mb-4">
                🏦 DIO Bank Pro - Terminal<br/>
                ✅ Serviços inicializados com sucesso<br/>
                <span className="text-gray-500"># Pronto para operações bancárias</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00f5d4]">$</span>
                <span className="text-gray-300">npm test</span>
                <span className="w-2 h-4 bg-[#00f5d4] animate-pulse ml-1"></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-gray-400">Ferramentas modernas para código de qualidade enterprise</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
              { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'Vitest', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg' },
              { name: 'ESLint', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg' },
              { name: 'Prettier', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg' },
              { name: 'GitHub Actions', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            ].map((tech, i) => (
              <motion.div 
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all"
              >
                <img src={tech.img} alt={tech.name} className="w-6 h-6" />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-16 rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5d4] to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00f5d4]/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#9b5de5]/20 blur-3xl rounded-full"></div>
            
            <div className="relative text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para explorar?</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Clone o repositório, execute os testes e veja uma aplicação bancária construída com padrões de produção.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://github.com/matheusflorindo32/dio-bank-pro" target="_blank" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] text-black rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#00f5d4]/25 transition-all">
                  <Github size={20} />
                  Ver no GitHub
                  <ChevronRight size={20} />
                </a>
                <a href="https://github.com/matheusflorindo32/dio-bank-pro#readme" className="flex items-center gap-2 px-8 py-4 border border-white/20 rounded-xl font-bold text-lg hover:border-[#00f5d4] hover:text-[#00f5d4] transition-all">
                  Documentação
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2024 Matheus Florindo de Deus — <a href="https://github.com/matheusflorindo32/dio-bank-pro/blob/main/LICENSE" className="text-[#00f5d4] hover:underline">MIT License</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
