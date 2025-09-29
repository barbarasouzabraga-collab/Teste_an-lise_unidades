// VARIÁVEL GLOBAL: A Base de Dados JSON (com o novo campo 'ETAPA' incluído)
const baseDeHabilidades = [
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D019_M",
    "Habilidade": "Identificar a localização ou a movimentação de pessoas ou objetos em uma representação plana do espaço.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D017_M",
    "Habilidade": "Identificar representações de figuras bidimensionais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D026_M",
    "Habilidade": "Identificar instrumentos utilizados para medir determinadas grandezas (massa, comprimento, capacidade, tempo e temperatura).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D126_M",
    "Habilidade": "Corresponder cédulas e/ou moedas do Sistema Monetário Brasileiro.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critérios de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D001_M",
    "Habilidade": "Reconhecer características do sistema de numeração decimal.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D012_M",
    "Habilidade": "Utilizar números naturais, envolvendo diferentes significados da adição ou da subtração, na resolução de problemas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D010_M",
    "Habilidade": "Executar adição ou subtração com números naturais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D009_M",
    "Habilidade": "Comparar ou ordenar quantidades pela contagem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D003_M",
    "Habilidade": "Executar a contagem de um grupo de objetos/pessoas/animais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D138_M",
    "Habilidade": "Identificar informações a partir de dados dispostos em tabelas simples.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D034_M",
    "Habilidade": "Identificar dados apresentados por meio de gráficos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D023_M",
    "Habilidade": "Reconhecer unidade de medida e/ou instrumento mais apropriado para medições de comprimento, tempo ou capacidade.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D012_M",
    "Habilidade": "Utilizar números naturais, envolvendo diferentes significados da adição ou da subtração, na resolução de problemas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D030_M",
    "Habilidade": "Utilizar conversão entre unidades de medidas de tempo na resolução de problema.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D154_M",
    "Habilidade": "Resolver problemas que envolvam moedas/cédulas do Sistema Monetário Brasileiro.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D019_M",
    "Habilidade": "Identificar a localização ou a movimentação de pessoas ou objetos em uma representação plana do espaço.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D001_M",
    "Habilidade": "Reconhecer características do sistema de numeração decimal.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D008_M",
    "Habilidade": "Identificar composições ou decomposições de números naturais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D004_M",
    "Habilidade": "Corresponder números naturais à sua escrita por extenso.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D033_M",
    "Habilidade": "Identificar informações a partir de dados dispostos em tabelas de dupla entrada.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critérios de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D034_M",
    "Habilidade": "Identificar dados apresentados por meio de gráficos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D017_M",
    "Habilidade": "Identificar representações de figuras bidimensionais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D026_M",
    "Habilidade": "Identificar instrumentos utilizados para medir determinadas grandezas (massa, comprimento, capacidade, tempo e temperatura).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D017_M",
    "Habilidade": "Identificar representações de figuras bidimensionais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D012_M",
    "Habilidade": "Utilizar números naturais, envolvendo diferentes significados da adição ou da subtração, na resolução de problemas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D019_M",
    "Habilidade": "Identificar a localização ou a movimentação de pessoas ou objetos em uma representação plana do espaço.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D022_M",
    "Habilidade": "Reconhecer horas em relógios digitais e/ou analógicos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D030_M",
    "Habilidade": "Utilizar conversão entre unidades de medidas de tempo na resolução de problema.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D018_M",
    "Habilidade": "Corresponder figuras tridimensionais às suas planificações.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D008_M",
    "Habilidade": "Identificar composições ou decomposições de números naturais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D026_M",
    "Habilidade": "Identificar instrumentos utilizados para medir determinadas grandezas (massa, comprimento, capacidade, tempo e temperatura).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D034_M",
    "Habilidade": "Identificar dados apresentados por meio de gráficos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D011_M",
    "Habilidade": "Executar operação de multiplicação entre números naturais, formados por até cinco algarismos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D033_M",
    "Habilidade": "Identificar informações a partir de dados dispostos em tabelas de dupla entrada.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D004_M",
    "Habilidade": "Corresponder números naturais à sua escrita por extenso.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D169_M",
    "Habilidade": "Identificar diferentes representações de um mesmo número racional.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D122_M",
    "Habilidade": "Corresponder o horário de início e de término com o intervalo de duração de um evento ou acontecimento.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D013_M",
    "Habilidade": "Utilizar números naturais, envolvendo diferentes significados da multiplicação ou da divisão, na resolução de problemas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D159_M",
    "Habilidade": "Identificar fração como representação que pode estar associada a diferentes significados.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critériods de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D123_M",
    "Habilidade": "Identificar as relações inversas entre as operações de adição, subtração, multiplicação e divisão.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Álgebra"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D168_M",
    "Habilidade": "Relacionar diferentes poliedros ou corpos redondos com suas planificações ou vistas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D144_M",
    "Habilidade": "Utilizar conversão entre unidades de medidas na resolução de problema.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D181_M",
    "Habilidade": "Identificar a localização de números naturais em reta numérica.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D170_M",
    "Habilidade": "Identificar a localização de números racionais na reta numérica.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D139_M",
    "Habilidade": "Executar multiplicação ou divisão com números naturais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D182_M",
    "Habilidade": "Num problema, estabelecer trocas entre cédulas e moedas do sistema monetário brasileiro, em função de seus valores.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D155_M",
    "Habilidade": "Resolver problema com números naturais, envolvendo diferentes significados das operações (adição, subtração, multiplicação, divisão, potenciação).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D003_M",
    "Habilidade": "Executar a contagem de um grupo de objetos/pessoas/animais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D001_M",
    "Habilidade": "Reconhecer características do sistema de numeração decimal.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critérios de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D169_M",
    "Habilidade": "Identificar diferentes representações de um mesmo número racional.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D018_M",
    "Habilidade": "Corresponder figuras tridimensionais às suas planificações.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D019_M",
    "Habilidade": "Identificar a localização ou a movimentação de pessoas ou objetos em uma representação plana do espaço.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D017_M",
    "Habilidade": "Identificar representações de figuras bidimensionais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D025_M",
    "Habilidade": "Reconhecer a unidade de medida e/ou o instrumento mais apropriado para medições de massa, temperatura ou tempo.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D012_M",
    "Habilidade": "Utilizar números naturais, envolvendo diferentes significados da adição ou da subtração, na resolução de problemas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D139_M",
    "Habilidade": "Executar multiplicação ou divisão com números naturais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D155_M",
    "Habilidade": "Resolver problema com números naturais, envolvendo diferentes significados das operações (adição, subtração, multiplicação, divisão, potenciação).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D170_M",
    "Habilidade": "Identificar a localização de números racionais na reta numérica.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D159_M",
    "Habilidade": "Identificar fração como representação que pode estar associada a diferentes significados.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D137_M",
    "Habilidade": "Identificar dados apresentados por meio de gráficos de setores (pizza).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D003_M",
    "Habilidade": "Executar a contagem de um grupo de objetos/pessoas/animais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critérios de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D169_M",
    "Habilidade": "Identificar diferentes representações de um mesmo número racional.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D025_M",
    "Habilidade": "Reconhecer a unidade de medida e/ou o instrumento mais apropriado para medições de massa, temperatura ou tempo.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D018_M",
    "Habilidade": "Corresponder figuras tridimensionais às suas planificações.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D155_M",
    "Habilidade": "Resolver problema com números naturais, envolvendo diferentes significados das operações (adição, subtração, multiplicação, divisão, potenciação).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D137_M",
    "Habilidade": "Identificar dados apresentados por meio de gráficos de setores (pizza).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D017_M",
    "Habilidade": "Identificar representações de figuras bidimensionais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D019_M",
    "Habilidade": "Identificar a localização ou a movimentação de pessoas ou objetos em uma representação plana do espaço.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D170_M",
    "Habilidade": "Identificar a localização de números racionais na reta numérica.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D154_M",
    "Habilidade": "Resolver problemas que envolvam moedas/cédulas do Sistema Monetário Brasileiro.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D176_M",
    "Habilidade": "Resolver situação-problema que envolva porcentagem (cálculo de 10%, 25%, 50% ou 75%).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D003_M",
    "Habilidade": "Executar a contagem de um grupo de objetos/pessoas/animais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critérios de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D169_M",
    "Habilidade": "Identificar diferentes representações de um mesmo número racional.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D155_M",
    "Habilidade": "Resolver problema com números naturais, envolvendo diferentes significados das operações (adição, subtração, multiplicação, divisão, potenciação).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D080_M",
    "Habilidade": "Resolver situações-problema envolvendo a interpretação de informações apresentadas em gráficos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D182_M",
    "Habilidade": "Num problema, estabelecer trocas entre cédulas e moedas do sistema monetário brasileiro, em função de seus valores.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D183_M",
    "Habilidade": "Resolver situação-problema que envolva juros simples.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D176_M",
    "Habilidade": "Resolver situação-problema que envolva porcentagem (cálculo de 10%, 25%, 50% ou 75%).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D079_M",
    "Habilidade": "Resolver problema que envolva a leitura ou a interpretação de informações dispostas em tabelas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critérios de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D169_M",
    "Habilidade": "Identificar diferentes representações de um mesmo número racional.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D155_M",
    "Habilidade": "Resolver problema com números naturais, envolvendo diferentes significados das operações (adição, subtração, multiplicação, divisão, potenciação).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D080_M",
    "Habilidade": "Resolver situações-problema envolvendo a interpretação de informações apresentadas em gráficos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D079_M",
    "Habilidade": "Resolver problema que envolva a leitura ou a interpretação de informações dispostas em tabelas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D018_M",
    "Habilidade": "Corresponder figuras tridimensionais às suas planificações.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D144_M",
    "Habilidade": "Utilizar conversão entre unidades de medidas na resolução de problema.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D182_M",
    "Habilidade": "Num problema, estabelecer trocas entre cédulas e moedas do sistema monetário brasileiro, em função de seus valores.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D183_M",
    "Habilidade": "Resolver situação-problema que envolva juros simples.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D176_M",
    "Habilidade": "Resolver situação-problema que envolva porcentagem (cálculo de 10%, 25%, 50% ou 75%).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D170_M",
    "Habilidade": "Identificar a localização de números racionais na reta numérica.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D159_M",
    "Habilidade": "Identificar fração como representação que pode estar associada a diferentes significados.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  }
];

// Elementos da interface (DOM)
const inputContainer = document.getElementById("habilidades-input-container");
const gerarOrientacaoBtn = document.getElementById("gerarOrientacaoBtn");
const resultadoSection = document.getElementById("resultado-section");
const resultadoContainer = document.getElementById("resultado-container");
// NOVO ELEMENTO PARA O FILTRO
const etapaFilterContainer = document.getElementById("etapa-filter-container");

// ----------------------------------------------------
// 1. Lógica do Filtro de Etapa (Nova Função)
// ----------------------------------------------------

function obterEtapasUnicas() {
    const etapas = baseDeHabilidades.map(h => h.ETAPA);
    // Usa Set para obter valores únicos e sort() para ordenar
    return [...new Set(etapas)].sort();
}

function criarSeletorEtapa() {
    const etapasUnicas = obterEtapasUnicas();
    if (etapasUnicas.length === 0) return;

    let selectHTML = '<h2>1. Escolha a Etapa para Análise:</h2><select id="etapa-selector">';
    selectHTML += '<option value="">-- Selecione a Etapa --</option>';

    etapasUnicas.forEach(etapa => {
        selectHTML += `<option value="${etapa}">${etapa}</option>`;
    });

    selectHTML += '</select>';
    etapaFilterContainer.innerHTML = selectHTML;

    // Adiciona o listener para filtrar os inputs ao selecionar
    const seletorEtapa = document.getElementById('etapa-selector');
    seletorEtapa.addEventListener('change', filtrarEExibirInputs);

    // Esconde os inputs e botão até a escolha
    inputContainer.style.display = 'none';
    gerarOrientacaoBtn.style.display = 'none';
    resultadoSection.style.display = 'none';
}

// ----------------------------------------------------
// 2. Geração e Filtro do Formulário de Entrada (Ajustada)
// ----------------------------------------------------

function filtrarEExibirInputs() {
    const seletor = document.getElementById('etapa-selector');
    const etapaSelecionada = seletor.value;

    inputContainer.innerHTML = "";
    
    // Esconde tudo se nada estiver selecionado
    if (!etapaSelecionada) {
        inputContainer.style.display = 'none';
        gerarOrientacaoBtn.style.display = 'none';
        return;
    }

    const habilidadesFiltradas = baseDeHabilidades.filter(h => h.ETAPA === etapaSelecionada && h.Habilidade && h.ID_Habilidade);

    habilidadesFiltradas.forEach(habilidade => {
        const div = document.createElement("div");
        div.classList.add("habilidade-item");

        // REQUISIÇÃO 2: Remove a informação de Corte Intermediário
        const label = document.createElement("label");
        label.innerHTML = `<strong>${habilidade.ID_Habilidade} - ${habilidade.DISCIPLINA} (${habilidade.ETAPA}):</strong> ${habilidade.Habilidade}`;

        // Campo para digitar o percentual
        const input = document.createElement("input");
        input.type = "number";
        input.min = 0;
        input.max = 100;
        input.step = 1;
        input.placeholder = "% de acertos (ex: 75)";
        input.id = `input-${habilidade.ID_Habilidade}-${habilidade.ETAPA}`; 
        input.required = true;

        div.appendChild(label);
        div.appendChild(input);
        inputContainer.appendChild(div);
    });
    
    // Exibe os inputs e o botão de gerar
    inputContainer.style.display = 'block';
    gerarOrientacaoBtn.style.display = 'block';
    resultadoSection.style.display = 'none';
}

// ... (código existente até aqui)

// ----------------------------------------------------
// 3. Lógica de Cálculo e Decisão (Análise por Unidade Temática)
// ----------------------------------------------------

gerarOrientacaoBtn.addEventListener("click", gerarOrientacoes);

function gerarOrientacoes() {
    resultadoContainer.innerHTML = "";
    
    // Objeto para armazenar as contagens agrupadas por UNIDADE TEMÁTICA
    const analisePorUnidade = {};
    let todosValidos = true;
    let acertosInvalidos = 0;

    // 1. Processamento e Contagem dos Descritores
    
    // Itera sobre a base inteira, mas processa apenas os inputs que foram criados (da Etapa selecionada)
    baseDeHabilidades.forEach(habilidade => {
        const inputId = `input-${habilidade.ID_Habilidade}-${habilidade.ETAPA}`;
        const input = document.getElementById(inputId);
        
        // Ignora se o input não existe (não é da etapa selecionada)
        if (!input) return;

        const acertosDigitados = input.value;
        const acertos = parseFloat(acertosDigitados) / 100;

        // Validação de Input
        if (isNaN(acertos) || acertos < 0 || acertos > 1 || acertosDigitados === "") {
             input.style.border = "2px solid red";
             todosValidos = false;
             acertosInvalidos++;
             return; 
        }
        input.style.border = ""; // Limpa a borda vermelha se for válido
        
        // Inicializa a unidade temática se for a primeira vez
        const unidade = habilidade["UNIDADE TEMÁTICA"];
        if (!analisePorUnidade[unidade]) {
            analisePorUnidade[unidade] = {
                total: 0,
                nivelA: 0, // < 60%
                nivelB: 0, // 60% a 80%
                nivelC: 0  // > 80%
            };
        }

        // Incrementa o total de descritores na unidade
        analisePorUnidade[unidade].total++;

        // Classificação e Contagem por Nível
        const pcA = habilidade.Percentual_Corte_A; // 0.6 (60%)
        const pcB = habilidade.Percentual_Corte_B; // 0.8 (80%)
        
        if (acertos < pcA) { // Usando < 0.6 para corresponder ao texto sugerido < 60%
            analisePorUnidade[unidade].nivelA++;
        } else if (acertos >= pcA && acertos <= pcB) { // 60% a 80%
            analisePorUnidade[unidade].nivelB++;
        } else { // > 80%
            analisePorUnidade[unidade].nivelC++;
        }
    });

    // 2. Exibição dos Resultados e Textos de Orientação
    
    if (!todosValidos) {
        resultadoContainer.innerHTML = `<p style="color: red; font-weight: bold;">⚠️ Por favor, preencha corretamente os ${acertosInvalidos} campos marcados em vermelho (valores de 0 a 100) antes de gerar as orientações.</p>`;
        resultadoSection.style.display = "block";
        return;
    }

    let resultadosHTML = '';

    // Loop pelas Unidades Temáticas para gerar o texto
    for (const [unidade, dados] of Object.entries(analisePorUnidade)) {
        const total = dados.total;
        const nivelA = dados.nivelA;
        const nivelB = dados.nivelB;
        const nivelC = dados.nivelC;

        // Define as orientações pedagógicas para o texto (ajustável)
        const textoA = "reforçar a base e a conceituação inicial.";
        const textoB = "focar em exercícios de aplicação e resolução de problemas variados.";
        const textoC = "promover atividades de aprofundamento e desafios complexos.";

        // Estrutura do bloco de texto por Unidade Temática
        resultadosHTML += `
            <div class="orientacao-bloco">
                <h3>${unidade} (${total} Descritores)</h3>
                <p>
                    Dentre os <strong>${total} descritores</strong> desta unidade, a sua turma se distribui da seguinte forma:
                </p>
                <ul>
                    <li class="nivelA">
                        Você tem <strong>${nivelA} descritores</strong> com percentual <strong>abaixo de 60%</strong>. Para estes, é preciso ${textoA}
                    </li>
                    <li class="nivelB">
                        Você tem <strong>${nivelB} descritores</strong> com percentual <strong>entre 60% e 80%</strong>, os quais demandam ${textoB}
                    </li>
                    <li class="nivelC">
                        Você tem <strong>${nivelC} descritores</strong> com percentual <strong>acima de 80%</strong>. Estes demandam ${textoC}
                    </li>
                </ul>
            </div>
        `;
    }

    resultadoContainer.innerHTML = resultadosHTML;
    resultadoSection.style.display = "block";
}

// Inicializa: Cria o seletor de etapa assim que a página estiver pronta
criarSeletorEtapa();