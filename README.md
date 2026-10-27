# jhonata.dev

Portfólio técnico de Jhonata Nogueira, construído com Angular 22, Tailwind CSS 4 e PrimeNG 22.

## Executar

O Angular 22 exige Node.js `22.22.3` ou superior. A versão recomendada para este projeto é Node.js 24 LTS.

```powershell
npm install
npm start
```

A aplicação estará disponível em `http://localhost:4200`.

Para gerar o pacote de produção:

```powershell
npm run format:check
npm run build
```

## Produção com Docker

O site é compilado em uma imagem multi-stage e servido pelo Nginx na porta
interna `8080`. Para uma instalação manual na VPS:

```bash
git clone <URL-DO-REPOSITORIO> jhonata.dev
cd jhonata.dev
cp .env.production.example .env.production
docker compose --env-file .env.production \
  -f docker-compose.production.yml up -d --build
```

Por padrão, o Compose publica o site em `0.0.0.0:3340` para permitir acesso a
partir de um proxy reverso executado em outro container. Configure o proxy para
encaminhar o domínio para a porta `3340` da VPS.

Se o proxy reverso estiver instalado diretamente no host, altere
`SITE_BIND_ADDRESS` para `127.0.0.1`. Em ambos os casos, mantenha a porta `3340`
bloqueada no firewall para acesso externo direto e exponha publicamente apenas
HTTP/HTTPS pelo proxy.

Para validar a implantação:

```bash
docker compose --env-file .env.production -f docker-compose.production.yml ps
curl --fail http://127.0.0.1:3340/ >/dev/null
```

## Arquitetura

```text
src/app/
  core/       contratos, tokens de injeção e serviços globais
  data/       conteúdo tipado do portfólio
  features/   páginas carregadas sob demanda
  shared/ui/  design system reutilizável j-*
```

- Componentes de feature não importam PrimeNG diretamente.
- `j-button`, `j-nav`, `j-accordion`, `j-project-card` e demais componentes expõem contratos próprios.
- O PrimeNG fica restrito à camada `shared/ui`; os tokens visuais são independentes da biblioteca.
- O conteúdo do portfólio entra por `PORTFOLIO_CONTENT`, um `InjectionToken`, permitindo trocar a fonte de dados sem alterar as páginas.
- Temas claro e escuro usam tokens CSS e respeitam a preferência do sistema.
- As rotas de cases são lazy-loaded e derivadas de dados tipados.

## Conteúdo e privacidade

As descrições técnicas foram resumidas a partir de materiais e repositórios locais. O site evita publicar credenciais, configuração sensível, trechos internos ou afirmações não verificadas. Imagens do produto usadas no portfólio vêm dos próprios projetos.
