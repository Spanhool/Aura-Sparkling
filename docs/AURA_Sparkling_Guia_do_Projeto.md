# AURA Sparkling — Guia do Projeto

> **Projeto 01 · Portfólio Front-end**  
> **Versão:** 1.0 — 17/10/2026  
> **Status:** design desktop criado no Paper; início da implementação  
> **Slogan:** *Leveza em cada instante.*

Este documento é a referência rápida para construir e manter a landing page **AURA Sparkling**. Ele registra as decisões já tomadas e diferencia o que ainda precisa ser validado.

---

## 1. Visão geral

**Marca:** AURA Sparkling  
**Segmento:** água com gás premium com sabores naturais (marca e produtos fictícios).  
**Proposta:** comunicar frescor, leveza e sofisticação por meio de uma experiência digital editorial.  
**Objetivo:** landing page responsiva, bem estruturada, acessível e com animações sutis; publicação no GitHub e na Vercel como projeto de portfólio.

### Personalidade e direção de arte

- **Personalidade:** minimalista, elegante, refrescante, contemporânea e natural.
- **Estética:** *Fresh Editorial* — composição editorial, espaços em branco, produto como protagonista e fotografia lifestyle.
- **Equilíbrio visual:** início claro e minimalista; sabores com cores próprias; final de página elegante.
- **Evitar:** sombras pesadas, neon, excesso de gradientes, animações chamativas e aparência de template SaaS.

**Referência principal:** layout desktop gerado no Paper Design e revisado na mentoria. Ele é uma **referência visual**, não um código para copiar automaticamente. O layout mobile ainda precisa de revisão final.

---

## 2. Design system

### Paleta principal

| Token sugerido | Cor | Hex | Uso |
|---|---|---|---|
| `background` | Off-white | `#F7F9F8` | Fundo principal da página |
| `text-primary` | Grafite | `#222E35` | Títulos, texto principal, botões escuros e footer |
| `text-secondary` | Cinza suave | `#56676B` | Descrições, legendas e textos de apoio |
| `flavor-citrus` | Azul gelo | `#B9DDE5` | Identidade do Pure Citrus |
| `flavor-peach` | Rosa pêssego | `#F4D2CE` | Identidade do Peach Bloom |
| `flavor-mint` | Verde sálvia | `#A8CBB6` | Identidade do Mint Breeze |

**Variações opcionais para fundos de seções** (propostas de refinamento, não obrigatórias):

| Sabor | Fundo claro | Hex |
|---|---|---|
| Pure Citrus | Azul muito claro | `#DCEFF3` |
| Peach Bloom | Rosa muito claro | `#F8E6E3` |
| Mint Breeze | Verde muito claro | `#DFEDE3` |

**Regra de uso:** priorizar grafite em textos sobre fundos claros e verificar o contraste real. As cores de sabor funcionam como identidade e destaque, não como substitutas automáticas da cor de texto.

### Tipografia

| Papel | Família | Pesos sugeridos |
|---|---|---|
| Headings e destaques | **Sora** | 400, 500, 600 |
| Texto, navegação, botões e legendas | **Inter** | 400, 500 |

- Títulos: composição expressiva com poucas palavras por linha.
- Texto corrido: legibilidade acima de efeitos visuais.
- Legendas editoriais: podem ser em caixa alta e com espaçamento entre letras, **sem ficarem pequenas demais**.
- Tamanhos, line-height e espaçamentos definitivos serão validados no CSS ao testar o layout real.

### Diretrizes de layout

- Abordagem **mobile-first**.
- Mobile de referência: **390px**; não é o único tamanho a testar.
- Desktop de referência: **1440px**.
- Container desktop: aproximadamente **1200px** de largura máxima.
- Margem lateral mobile inicial: aproximadamente **24px**.
- Espaçamento generoso, grid consistente e equilíbrio entre texto, fotografia e espaços vazios.
- Começar pelo layout estático; animações vêm depois.

---

## 3. Produtos e linguagem visual

As três latas são do tipo **slim, 330 ml**, mantendo **mesmo formato, proporção, estilo de rótulo e posicionamento do logotipo**.

| Produto | Sabor | Identidade | Sensação |
|---|---|---|---|
| **Pure Citrus** | Limão siciliano | Azul gelo | Cítrico, leve, vibrante |
| **Peach Bloom** | Pêssego | Rosa suave | Delicado, frutado, envolvente |
| **Mint Breeze** | Hortelã e limão | Verde sálvia | Fresco, natural, equilibrado |

**Orientação para imagens:** usar, sempre que possível, latas recortadas com fundo transparente, enquadramento consistente e boa resolução. Os mockups gerados no Paper são referência visual; confirmar qualidade e direitos de uso de cada asset antes da publicação.

---

## 4. Estrutura e conteúdo da landing page

### 01 — Hero Section

**Finalidade:** comunicar a proposta da AURA imediatamente e apresentar o produto principal.

- **Navbar:** logotipo AURA e links `Início`, `Experiência`, `Sabores`, `Momentos`.
- **Apoio editorial:** `ÁGUA COM GÁS. SABORES NATURAIS.`
- **Título (H1):** **Leveza em cada instante.**
- **Texto:** “Água com gás e sabores naturais para transformar pequenas pausas em momentos especiais.”
- **CTA:** `Descubra os sabores` → seção de sabores.
- **Imagem:** lata Pure Citrus em grande destaque.
- **Desktop de referência:** texto à esquerda, lata à direita, composição arejada.

### 02 — The Experience

**Finalidade:** explicar a experiência e criar identificação sensorial com a marca.

- **Título:** **O frescor tem uma nova expressão.**
- **Texto:** “AURA combina a leveza da água com gás com a personalidade de sabores frutados. Uma experiência criada para quem aprecia os detalhes dos momentos mais simples.”
- **Imagem:** fotografia editorial com copo, água, luz e produto.
- **Desktop de referência:** imagem à esquerda e texto à direita.

### 03 — Discover the Flavors

**Finalidade:** apresentar claramente os três sabores com protagonismo para cada lata.

- **Título:** **Três sabores. Infinitas sensações.**
- **Introdução:** “Cada sabor traz uma maneira diferente de descobrir o frescor.”
- **Pure Citrus:** “O toque cítrico do limão siciliano em uma experiência leve, vibrante e refrescante.”
- **Peach Bloom:** “A delicadeza do pêssego em uma combinação suave, frutada e envolvente.”
- **Mint Breeze:** “O frescor da hortelã encontra a vivacidade do limão em uma combinação equilibrada.”
- **Desktop de referência:** **três blocos editoriais sucessivos, alternando texto e imagem** (não necessariamente três cards lado a lado).
- **Refinamento sugerido:** aumentar o protagonismo visual das latas, aproximar informações e experimentar fundos pastel suaves para cada sabor.

### 04 — Made for Your Moments

**Finalidade:** mostrar contextos de consumo e sensação de lifestyle.

- **Título:** **Para todos os seus momentos.**
- **Texto:** “Uma pausa no meio do dia. Uma tarde ao ar livre. Uma boa conversa. AURA acompanha o que torna cada instante especial.”
- **Apoio opcional:** **O melhor da vida cabe numa pausa.**
- **Imagens:** composição editorial assimétrica com momentos ao ar livre, pessoas, produto e ingredientes.

### 05 — Experience AURA + Footer

**Finalidade:** fechar a narrativa e oferecer nova oportunidade de explorar os sabores.

- **Título:** **Sinta a leveza de AURA.**
- **Texto:** “Encontre seu sabor. Descubra uma nova maneira de refrescar seus momentos.”
- **CTA:** `Explorar sabores` → seção de sabores.
- **Imagem:** conjunto das três latas.
- **Footer:** marca, slogan, links internos e copyright da marca fictícia.

> **Atenção aos links:** a landing page não terá checkout nem backend. Todo CTA deve ter um destino funcional, preferencialmente uma âncora interna.

---

## 5. Plano de animações (GSAP)

**Princípio:** o site precisa funcionar plenamente **sem animações**. Os efeitos reforçam a narrativa e jamais devem bloquear conteúdo essencial.

| Seção | Efeito proposto | Conceitos |
|---|---|---|
| Hero | Entrada sequencial de textos, CTA e lata | `timeline`, `from`, `ease` |
| The Experience | Revelação de imagem e deslocamento sutil no scroll | `ScrollTrigger`, `start`, `end`, `scrub` |
| Discover the Flavors | Revelação progressiva das latas e textos | `stagger`, `ScrollTrigger` |
| Made for Your Moments | Revelação de fotos e parallax discreto | `ScrollTrigger`, `scrub`, transformações |
| Experience AURA | Entrada suave do título, CTA e trio de latas | `timeline`, `stagger` |

**Durante a implementação:**

1. Testar cada animação isoladamente antes de combiná-la com outras.
2. Priorizar `transform` e `opacity` para movimentos fluidos.
3. Adaptar os efeitos para diferentes tamanhos de tela.
4. Respeitar `prefers-reduced-motion` e assegurar conteúdo visível quando movimento for reduzido.
5. Aprender `pin` em um exercício separado; **não é requisito** da landing page.
6. Utilizar `markers` apenas durante o desenvolvimento e removê-los da publicação.

---

## 6. Organização sugerida dos arquivos

Estrutura inicial simples, sem frameworks e sem complexidade desnecessária:

```text
aura-sparkling/
├── index.html
├── README.md
├── assets/
│   ├── images/
│   │   ├── products/
│   │   │   ├── pure-citrus.webp
│   │   │   ├── peach-bloom.webp
│   │   │   └── mint-breeze.webp
│   │   └── lifestyle/
│   └── icons/
│       ├── logo.svg
│       └── favicon.svg
└── src/
    ├── css/
    │   └── style.css
    └── js/
        ├── main.js
        └── animations.js
```

**Notas:**
- A separação entre `main.js` e `animations.js` é uma sugestão; manter um arquivo JS no início também é válido.
- Adicionar novos arquivos apenas quando houver uma necessidade real.
- Separar imagem de produto de fotografia lifestyle facilita organização e substituição de assets.
- Usar nomes de arquivos claros, em minúsculas e sem espaços.

---

## 7. Requisitos de qualidade

### HTML

- Utilizar elementos semânticos (`header`, `nav`, `main`, `section`, `footer`).
- Manter **um H1 principal**; estruturar os demais títulos com hierarquia coerente.
- Navegação com links reais e descrições compreensíveis.
- `alt` significativo para imagens informativas e `alt=""` quando forem puramente decorativas.

### CSS e responsividade

- Construir primeiro o mobile, depois adaptar com media queries quando o layout pedir.
- Evitar larguras fixas que gerem rolagem horizontal.
- Usar Flexbox e Grid de acordo com o problema de layout.
- Definir tokens reutilizáveis para cores, tipografia e espaçamentos conforme a necessidade.
- Testar telas estreitas, intermediárias e desktop, não apenas 390px e 1440px.

### JavaScript e acessibilidade

- Usar JS para comportamentos reais, sem depender dele para renderizar o conteúdo básico.
- Respeitar navegação por teclado, foco visível e contraste suficiente.
- Reduzir ou desabilitar movimentos intensos quando o usuário solicitar movimento reduzido.
- Não usar animações que causem saltos ou que escondam conteúdo permanentemente.

### Performance e publicação

- Otimizar imagens (preferencialmente WebP), dimensões e carregamento.
- Verificar responsividade e problemas no console.
- Criar commits claros e README adequado ao portfólio.
- Publicar na Vercel quando a versão estiver estável.

---

## 8. Etapas de implementação

- [ ] **Etapa 1 — HTML:** criar a estrutura semântica e o conteúdo da Hero.
- [ ] **Etapa 2 — HTML:** estruturar as demais seções.
- [ ] **Etapa 3 — CSS:** estilizar mobile-first (tipografia, cores e espaçamentos).
- [ ] **Etapa 4 — CSS:** ajustar desktop, intermediários e navegação responsiva.
- [ ] **Etapa 5 — Assets:** substituir placeholders e otimizar imagens.
- [ ] **Etapa 6 — GSAP:** animar a Hero e testar Timeline.
- [ ] **Etapa 7 — ScrollTrigger:** animar seções com movimento sutil.
- [ ] **Etapa 8 — Qualidade:** acessibilidade, performance e testes.
- [ ] **Etapa 9 — Publicação:** GitHub, README final e Vercel.

**Ritmo de estudo:** 2 horas/dia, 5 dias/semana; aproximadamente 80% prática e 20% novos conceitos ou revisão.

---

## 9. Pendências e decisões em aberto

- [ ] Revisar e aprovar o **design mobile** no Paper.
- [ ] Refinar o tamanho e a disposição dos produtos em **Discover the Flavors**.
- [ ] Garantir que as latas não apresentem fundos retangulares indesejados.
- [ ] Confirmar a qualidade e o uso dos assets finais.
- [ ] Validar tamanhos de fonte, contrastes e espaçamentos em telas reais.
- [ ] Avaliar se o CTA final precisa de mais impacto visual.
- [ ] Escolher as animações definitivas depois que o layout estático estiver pronto.

---

## 10. Como usar este guia

1. **Antes de codar:** consulte a seção correspondente e observe o frame do Paper.
2. **Durante o desenvolvimento:** mantenha a estrutura simples e registre mudanças importantes no projeto.
3. **Ao concluir uma etapa:** revise semântica, responsividade e acessibilidade antes de avançar.
4. **Em mentoria:** envie seu código para revisão; primeiro receberá análise, explicações e pistas, sem solução pronta, salvo se solicitar.

**Próximo passo:** implementar o HTML semântico da **Hero Section** e pedir o primeiro Code Review.

---

*AURA Sparkling é uma marca fictícia criada para fins de estudo e portfólio.*
