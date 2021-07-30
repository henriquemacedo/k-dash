const icons = {
  dark: "M16 4c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-0.613-0.053-1.227-0.133-1.813-1.307 1.827-3.44 3.013-5.867 3.013-3.973 0-7.2-3.227-7.2-7.2 0-2.413 1.187-4.56 3.013-5.867-0.587-0.080-1.2-0.133-1.813-0.133v0z",
  light:
    "M16 9.333c-3.68 0-6.667 2.987-6.667 6.667s2.987 6.667 6.667 6.667 6.667-2.987 6.667-6.667-2.987-6.667-6.667-6.667v0zM2.667 17.333h2.667c0.733 0 1.333-0.6 1.333-1.333s-0.6-1.333-1.333-1.333h-2.667c-0.733 0-1.333 0.6-1.333 1.333s0.6 1.333 1.333 1.333zM26.667 17.333h2.667c0.733 0 1.333-0.6 1.333-1.333s-0.6-1.333-1.333-1.333h-2.667c-0.733 0-1.333 0.6-1.333 1.333s0.6 1.333 1.333 1.333zM14.667 2.667v2.667c0 0.733 0.6 1.333 1.333 1.333s1.333-0.6 1.333-1.333v-2.667c0-0.733-0.6-1.333-1.333-1.333s-1.333 0.6-1.333 1.333zM14.667 26.667v2.667c0 0.733 0.6 1.333 1.333 1.333s1.333-0.6 1.333-1.333v-2.667c0-0.733-0.6-1.333-1.333-1.333s-1.333 0.6-1.333 1.333zM7.987 6.107c-0.52-0.52-1.373-0.52-1.88 0-0.52 0.52-0.52 1.373 0 1.88l1.413 1.413c0.52 0.52 1.373 0.52 1.88 0s0.52-1.373 0-1.88l-1.413-1.413zM24.48 22.6c-0.52-0.52-1.373-0.52-1.88 0-0.52 0.52-0.52 1.373 0 1.88l1.413 1.413c0.52 0.52 1.373 0.52 1.88 0 0.52-0.52 0.52-1.373 0-1.88l-1.413-1.413zM25.893 7.987c0.52-0.52 0.52-1.373 0-1.88-0.52-0.52-1.373-0.52-1.88 0l-1.413 1.413c-0.52 0.52-0.52 1.373 0 1.88s1.373 0.52 1.88 0l1.413-1.413zM9.4 24.48c0.52-0.52 0.52-1.373 0-1.88-0.52-0.52-1.373-0.52-1.88 0l-1.413 1.413c-0.52 0.52-0.52 1.373 0 1.88s1.373 0.52 1.88 0l1.413-1.413z",
  fog: "M9.193 18.708h13.636c2.259 0 4.090-1.831 4.090-4.090s-1.831-4.090-4.090-4.090v0c-0.026 0-0.047 0.009-0.068 0.009 0.043-0.202 0.068-0.433 0.068-0.67 0-0.007-0-0.014-0-0.021v0.001c0-0.004 0-0.008 0-0.013 0-1.875-1.52-3.395-3.395-3.395-1.048 0-1.986 0.475-2.608 1.222l-0.004 0.005c-0.805-1.55-2.398-2.59-4.234-2.59-2.627 0-4.756 2.129-4.756 4.756 0 0.006 0 0.011 0 0.017v-0.001c0.002 0.321 0.034 0.633 0.095 0.934l-0.005-0.031c-1.646 0.55-2.812 2.078-2.812 3.878 0 2.253 1.827 4.080 4.080 4.080 0.002 0 0.004 0 0.005 0h-0zM11.238 24.844h-5.452c-0.376 0.001-0.68 0.306-0.682 0.681v0.682c0.001 0.376 0.306 0.68 0.681 0.682h5.454c0.376-0.001 0.68-0.306 0.682-0.681v-0.682c-0.001-0.376-0.306-0.68-0.681-0.681h-0zM28.963 24.844h-14.315c-0.376 0.001-0.68 0.306-0.682 0.681v0.682c0.001 0.376 0.306 0.68 0.681 0.682h14.316c0.376-0.001 0.68-0.306 0.682-0.681v-0.682c-0.001-0.376-0.306-0.68-0.681-0.681h-0zM26.918 22.458v-0.682c-0.001-0.376-0.306-0.68-0.681-0.682h-23.178c-0.376 0.001-0.68 0.306-0.682 0.681v0.682c0.001 0.376 0.306 0.68 0.681 0.682h23.179c0.376-0.001 0.68-0.306 0.682-0.681v-0z",
  rain: "M22.799 10.528c-0.026 0-0.047 0.009-0.068 0.009 0.043-0.202 0.068-0.433 0.068-0.67 0-0.007-0-0.014-0-0.021v0.001c0-0.004 0-0.008 0-0.013 0-1.875-1.52-3.395-3.395-3.395-1.048 0-1.986 0.475-2.608 1.222l-0.004 0.005c-0.805-1.55-2.398-2.591-4.235-2.591-2.627 0-4.756 2.129-4.756 4.756 0 0.005 0 0.011 0 0.016v-0.001c0.002 0.321 0.034 0.633 0.095 0.934l-0.005-0.031c-1.649 0.549-2.817 2.078-2.817 3.879 0 2.253 1.827 4.080 4.080 4.080 0.004 0 0.008 0 0.012-0h13.634c2.259 0 4.090-1.831 4.090-4.090s-1.831-4.090-4.090-4.090v0zM7.119 20.754c-0.376 0.001-0.68 0.306-0.682 0.681v3.408c0 0.377 0.305 0.682 0.682 0.682s0.682-0.305 0.682-0.682v0-3.409c-0.001-0.376-0.306-0.68-0.682-0.681h-0zM11.21 22.118c-0.376 0.001-0.68 0.306-0.682 0.681v3.408c0 0.377 0.305 0.682 0.682 0.682s0.682-0.305 0.682-0.682v0-3.408c-0.001-0.376-0.306-0.681-0.682-0.682h-0zM15.3 20.754c-0.376 0.001-0.68 0.306-0.682 0.681v3.408c0 0.377 0.305 0.682 0.682 0.682s0.682-0.305 0.682-0.682v0-3.409c-0.001-0.376-0.306-0.68-0.682-0.681h-0zM19.39 22.118c-0.376 0.001-0.68 0.306-0.682 0.681v3.408c0 0.377 0.305 0.682 0.682 0.682s0.682-0.305 0.682-0.682v0-3.408c-0.001-0.376-0.306-0.681-0.682-0.682h-0zM23.481 20.754c-0.376 0.001-0.68 0.306-0.682 0.681v3.408c0 0.377 0.305 0.682 0.682 0.682s0.682-0.305 0.682-0.682v0-3.409c-0.001-0.376-0.306-0.68-0.682-0.681h-0z",
  heavy_rain:
    "M12.91 20.843c-0.097-0.057-0.213-0.090-0.338-0.090-0.252 0-0.472 0.138-0.589 0.343l-0.002 0.003-2.728 4.772c-0.056 0.097-0.090 0.213-0.090 0.337 0 0.252 0.138 0.473 0.342 0.589l0.003 0.002c0.097 0.056 0.213 0.089 0.336 0.089 0.252 0 0.473-0.138 0.59-0.342l0.002-0.003 2.727-4.772c0.056-0.097 0.089-0.213 0.089-0.336 0-0.252-0.137-0.472-0.341-0.59l-0.003-0.002zM17 20.843c-0.097-0.057-0.213-0.090-0.338-0.090-0.252 0-0.472 0.138-0.589 0.343l-0.002 0.003-2.728 4.772c-0.056 0.097-0.090 0.213-0.090 0.337 0 0.252 0.138 0.473 0.342 0.589l0.003 0.002c0.097 0.056 0.213 0.089 0.336 0.089 0.252 0 0.473-0.138 0.59-0.342l0.002-0.003 2.727-4.772c0.056-0.097 0.089-0.213 0.089-0.336 0-0.252-0.137-0.472-0.341-0.59l-0.003-0.002zM8.82 20.843c-0.097-0.057-0.213-0.090-0.338-0.090-0.252 0-0.472 0.138-0.589 0.343l-0.002 0.003-2.728 4.772c-0.056 0.097-0.090 0.213-0.090 0.337 0 0.252 0.138 0.473 0.342 0.589l0.003 0.002c0.097 0.056 0.213 0.089 0.336 0.089 0.252 0 0.473-0.138 0.59-0.342l0.002-0.003 2.727-4.772c0.056-0.097 0.089-0.213 0.089-0.336 0-0.252-0.137-0.472-0.341-0.59l-0.003-0.002zM25.181 20.843c-0.097-0.057-0.213-0.090-0.338-0.090-0.252 0-0.472 0.138-0.589 0.343l-0.002 0.003-2.727 4.772c-0.056 0.097-0.090 0.213-0.090 0.337 0 0.252 0.138 0.473 0.342 0.589l0.003 0.002c0.097 0.056 0.213 0.089 0.336 0.089 0.252 0 0.473-0.138 0.59-0.342l0.002-0.003 2.727-4.772c0.056-0.097 0.089-0.213 0.089-0.336 0-0.252-0.137-0.472-0.341-0.59l-0.003-0.002zM21.091 20.843c-0.097-0.057-0.213-0.090-0.338-0.090-0.252 0-0.472 0.138-0.589 0.343l-0.002 0.003-2.728 4.772c-0.056 0.097-0.090 0.213-0.090 0.337 0 0.252 0.138 0.473 0.342 0.589l0.003 0.002c0.097 0.056 0.213 0.089 0.336 0.089 0.252 0 0.473-0.138 0.59-0.342l0.002-0.003 2.727-4.772c0.056-0.097 0.089-0.213 0.089-0.336 0-0.252-0.137-0.472-0.341-0.59l-0.003-0.002zM22.799 10.528c-0.026 0-0.047 0.009-0.068 0.009 0.043-0.202 0.068-0.433 0.068-0.67 0-0.007-0-0.014-0-0.021v0.001c0-0.004 0-0.008 0-0.013 0-1.875-1.52-3.395-3.395-3.395-1.048 0-1.986 0.475-2.608 1.222l-0.004 0.005c-0.805-1.55-2.398-2.59-4.234-2.59-2.627 0-4.756 2.129-4.756 4.756 0 0.005 0 0.010 0 0.016v-0.001c0.002 0.321 0.034 0.633 0.095 0.934l-0.005-0.031c-1.649 0.549-2.817 2.078-2.817 3.879 0 2.253 1.827 4.080 4.080 4.080 0.004 0 0.008 0 0.012-0h13.634c2.259 0 4.090-1.831 4.090-4.090s-1.831-4.090-4.090-4.090v0z",
  light_rain:
    "M22.799 10.528c-0.026 0-0.047 0.009-0.068 0.009 0.043-0.202 0.068-0.433 0.068-0.67 0-0.007-0-0.014-0-0.021v0.001c0-0.004 0-0.008 0-0.013 0-1.875-1.52-3.395-3.395-3.395-1.048 0-1.986 0.475-2.608 1.222l-0.004 0.005c-0.805-1.55-2.398-2.591-4.235-2.591-2.627 0-4.756 2.129-4.756 4.756 0 0.005 0 0.011 0 0.016v-0.001c0.002 0.321 0.034 0.633 0.095 0.934l-0.005-0.031c-1.649 0.549-2.817 2.078-2.817 3.879 0 2.253 1.827 4.080 4.080 4.080 0.004 0 0.008 0 0.012-0h13.634c2.259 0 4.090-1.831 4.090-4.090s-1.831-4.090-4.090-4.090v0zM7.119 20.413c-0.376 0.001-0.68 0.306-0.682 0.681v1.705c0 0.377 0.305 0.682 0.682 0.682s0.682-0.305 0.682-0.682v0-1.704c-0.001-0.376-0.306-0.681-0.681-0.682h-0zM11.21 23.821c-0.376 0.001-0.68 0.306-0.682 0.681v1.704c0 0.377 0.305 0.682 0.682 0.682s0.682-0.305 0.682-0.682v0-1.704c-0.001-0.376-0.306-0.681-0.682-0.682h-0zM15.3 20.413c-0.376 0.001-0.68 0.306-0.682 0.681v1.705c0 0.377 0.305 0.682 0.682 0.682s0.682-0.305 0.682-0.682v0-1.704c-0.001-0.376-0.306-0.681-0.682-0.682h-0zM19.39 23.821c-0.376 0.001-0.68 0.306-0.682 0.681v1.704c0 0.377 0.305 0.682 0.682 0.682s0.682-0.305 0.682-0.682v0-1.704c-0.001-0.376-0.306-0.681-0.682-0.682h-0zM23.481 20.413c-0.376 0.001-0.68 0.306-0.682 0.681v1.705c0 0.377 0.305 0.682 0.682 0.682s0.682-0.305 0.682-0.682v0-1.704c-0.001-0.376-0.306-0.681-0.682-0.682h-0z",
  clouds:
    "M25.556 18.708c-0.026 0-0.047 0.009-0.068 0.009 0.043-0.202 0.068-0.433 0.068-0.67 0-0.007-0-0.014-0-0.021v0.001c0-0.004 0-0.009 0-0.014 0-1.875-1.52-3.395-3.395-3.395-1.048 0-1.986 0.475-2.608 1.222l-0.004 0.005c-0.805-1.55-2.398-2.59-4.234-2.59-2.627 0-4.756 2.129-4.756 4.756 0 0.006 0 0.011 0 0.017v-0.001c0.002 0.321 0.034 0.633 0.095 0.934l-0.005-0.031c-1.649 0.549-2.817 2.078-2.817 3.879 0 2.253 1.827 4.080 4.080 4.080 0.004 0 0.008 0 0.012-0h13.634c2.259 0 4.090-1.831 4.090-4.090s-1.831-4.090-4.090-4.090v0zM15.33 11.89c0 0 0.001 0 0.001 0 1.777 0 3.375 0.763 4.486 1.979l0.004 0.005c0.388-0.222 0.838-0.396 1.315-0.497l0.031-0.005c0.185-0.437 0.294-0.944 0.298-1.477v-0.002c0-0 0-0 0-0.001 0-2.259-1.831-4.091-4.090-4.092h-0c-0.611 0.002-1.189 0.138-1.708 0.381l0.025-0.010c-0.691-1.823-2.423-3.095-4.451-3.095-2.393 0-4.372 1.769-4.701 4.071l-0.003 0.025c-0.021 0-0.043-0.009-0.068-0.009-2.259 0-4.090 1.831-4.090 4.090s1.831 4.090 4.090 4.090h2.795c0.348-3.074 2.928-5.443 6.064-5.455h0.001z",
  snow: "M9.164 18.708h13.635c2.259 0 4.090-1.831 4.090-4.090s-1.831-4.090-4.090-4.090v0c-0.026 0-0.047 0.009-0.068 0.009 0.043-0.202 0.068-0.433 0.068-0.67 0-0.007-0-0.014-0-0.021v0.001c0-0.004 0-0.008 0-0.013 0-1.875-1.52-3.395-3.395-3.395-1.048 0-1.986 0.475-2.608 1.222l-0.004 0.005c-0.805-1.55-2.398-2.591-4.235-2.591-2.627 0-4.756 2.129-4.756 4.756 0 0.005 0 0.011 0 0.016v-0.001c0.002 0.321 0.034 0.633 0.095 0.934l-0.005-0.031c-1.649 0.549-2.817 2.078-2.817 3.879 0 2.253 1.827 4.080 4.080 4.080 0.004 0 0.008 0 0.012-0h-0.001zM10.481 21.652l-0.341-0.592c-0.060-0.102-0.169-0.169-0.294-0.169-0.063 0-0.121 0.017-0.172 0.046l0.002-0.001-1.193 0.686v-1.21c-0.001-0.188-0.153-0.34-0.341-0.341h-0.682c-0.188 0.001-0.34 0.153-0.341 0.341v1.21l-1.193-0.686c-0.049-0.029-0.107-0.046-0.17-0.046-0.125 0-0.234 0.067-0.293 0.168l-0.001 0.002-0.341 0.592c-0.029 0.049-0.046 0.108-0.046 0.17 0 0.125 0.067 0.234 0.168 0.293l0.002 0.001 1.189 0.682-1.188 0.682c-0.102 0.060-0.169 0.169-0.169 0.294 0 0.063 0.017 0.121 0.046 0.172l-0.001-0.002 0.341 0.592c0.060 0.102 0.169 0.169 0.294 0.169 0.063 0 0.121-0.017 0.172-0.046l-0.002 0.001 1.193-0.686v1.21c0.001 0.188 0.153 0.34 0.341 0.341h0.682c0.188-0.001 0.34-0.153 0.341-0.341v-1.21l1.193 0.686c0.049 0.029 0.107 0.046 0.17 0.046 0.125 0 0.234-0.067 0.293-0.168l0.001-0.002 0.342-0.592c0.029-0.049 0.046-0.108 0.046-0.17 0-0.125-0.067-0.234-0.168-0.293l-0.002-0.001-1.188-0.682 1.189-0.682c0.102-0.060 0.169-0.169 0.169-0.294 0-0.063-0.017-0.122-0.047-0.172l0.001 0.002zM18.661 23.016l-0.339-0.592c-0.060-0.102-0.169-0.169-0.294-0.169-0.063 0-0.121 0.017-0.172 0.046l0.002-0.001-1.193 0.686v-1.21c-0.001-0.188-0.153-0.34-0.341-0.341h-0.682c-0.188 0.001-0.34 0.153-0.341 0.341v1.21l-1.193-0.686c-0.049-0.029-0.107-0.046-0.17-0.046-0.125 0-0.234 0.067-0.293 0.168l-0.001 0.002-0.341 0.592c-0.029 0.049-0.046 0.108-0.046 0.171 0 0.125 0.067 0.234 0.167 0.293l0.002 0.001 1.189 0.682-1.189 0.682c-0.102 0.060-0.169 0.169-0.169 0.294 0 0.063 0.017 0.121 0.046 0.172l-0.001-0.002 0.341 0.592c0.060 0.102 0.169 0.169 0.294 0.169 0.063 0 0.121-0.017 0.172-0.046l-0.002 0.001 1.193-0.686v1.21c0.001 0.188 0.153 0.34 0.341 0.341h0.682c0.188-0.001 0.34-0.153 0.341-0.341v-1.21l1.193 0.686c0.049 0.029 0.108 0.046 0.17 0.046 0.125 0 0.234-0.067 0.293-0.168l0.001-0.002 0.341-0.592c0.029-0.049 0.046-0.108 0.046-0.17 0-0.125-0.067-0.234-0.168-0.293l-0.002-0.001-1.189-0.682 1.189-0.682c0.102-0.060 0.169-0.169 0.169-0.294 0-0.063-0.017-0.121-0.046-0.172l0.001 0.002zM26.842 21.652l-0.34-0.592c-0.060-0.102-0.169-0.169-0.294-0.169-0.063 0-0.121 0.017-0.172 0.046l0.002-0.001-1.193 0.686v-1.21c-0.001-0.188-0.153-0.34-0.341-0.341h-0.682c-0.188 0.001-0.34 0.153-0.341 0.341v1.21l-1.193-0.686c-0.049-0.029-0.108-0.046-0.17-0.046-0.125 0-0.234 0.067-0.293 0.168l-0.001 0.002-0.341 0.592c-0.029 0.049-0.046 0.108-0.046 0.17 0 0.125 0.067 0.234 0.168 0.293l0.002 0.001 1.189 0.682-1.189 0.682c-0.102 0.060-0.169 0.169-0.169 0.294 0 0.063 0.017 0.121 0.046 0.172l-0.001-0.002 0.341 0.592c0.060 0.102 0.169 0.169 0.294 0.169 0.063 0 0.121-0.017 0.172-0.046l-0.002 0.001 1.193-0.686v1.21c0.001 0.188 0.153 0.34 0.341 0.341h0.682c0.188-0.001 0.34-0.153 0.341-0.341v-1.209l1.193 0.686c0.049 0.029 0.108 0.046 0.17 0.046 0.125 0 0.234-0.067 0.293-0.168l0.001-0.002 0.341-0.592c0.029-0.049 0.046-0.108 0.046-0.17 0-0.125-0.067-0.234-0.168-0.293l-0.002-0.001-1.189-0.682 1.189-0.682c0.102-0.060 0.169-0.169 0.169-0.294 0-0.063-0.017-0.122-0.047-0.172l0.001 0.002z",
  thunderstorm:
    "M19.433 17.345h-3.072l0.963-3.285c0.014-0.050 0.022-0.106 0.022-0.165 0-0.353-0.286-0.64-0.64-0.64h-3.494c-0.323 0.001-0.59 0.24-0.634 0.552l-0 0.003-0.682 5.536c-0.004 0.026-0.006 0.056-0.006 0.086 0 0.353 0.287 0.64 0.64 0.64 0 0 0 0 0 0h3.451l-1.346 6.029c-0.011 0.044-0.017 0.095-0.017 0.147 0 0.353 0.287 0.64 0.64 0.64 0.235 0 0.44-0.126 0.551-0.315l0.002-0.003 4.175-8.266c0.053-0.091 0.085-0.201 0.085-0.318 0-0.353-0.285-0.639-0.638-0.64h-0zM22.799 10.529c-0.026 0-0.047 0.009-0.068 0.009 0.043-0.202 0.068-0.433 0.068-0.67 0-0.007-0-0.014-0-0.021v0.001c0-0.004 0-0.009 0-0.014 0-1.875-1.52-3.395-3.395-3.395-1.048 0-1.986 0.475-2.608 1.222l-0.004 0.005c-0.805-1.55-2.398-2.591-4.235-2.591-2.627 0-4.756 2.129-4.756 4.756 0 0.005 0 0.011 0 0.016v-0.001c0.002 0.321 0.034 0.633 0.095 0.934l-0.005-0.031c-1.649 0.549-2.817 2.078-2.817 3.879 0 2.253 1.827 4.080 4.080 4.080 0.004 0 0.008 0 0.012-0h1.384l0.677-5.079c0.137-0.985 0.972-1.736 1.984-1.738h3.623c0 0 0 0 0.001 0 1.105 0 2.002 0.896 2.002 2.002 0 0.184-0.025 0.362-0.071 0.531l0.003-0.014-0.464 1.743h1.298c0.002 0 0.005 0 0.008 0 1.101 0 1.993 0.892 1.993 1.993 0 0.201-0.030 0.394-0.085 0.577l0.004-0.014h1.277c2.259 0 4.090-1.831 4.090-4.090s-1.831-4.090-4.090-4.090v0z",
  sun: "M15.982 11.89c-2.259 0-4.090 1.831-4.090 4.090s1.831 4.090 4.090 4.090c2.259 0 4.090-1.831 4.090-4.089v-0c-0.003-2.258-1.832-4.088-4.090-4.092h-0zM26.48 15.321l-4.035-2.016 1.427-4.278c0.024-0.070 0.039-0.151 0.039-0.235 0-0.406-0.33-0.736-0.736-0.736-0.084 0-0.165 0.014-0.241 0.040l0.005-0.002-4.278 1.427-2.020-4.039c-0.124-0.245-0.373-0.409-0.66-0.409s-0.537 0.165-0.659 0.405l-0.002 0.004-2.016 4.035-4.281-1.427c-0.070-0.025-0.152-0.039-0.236-0.039-0.406 0-0.736 0.33-0.736 0.736 0 0.084 0.014 0.166 0.040 0.241l-0.002-0.005 1.427 4.278-4.035 2.020c-0.245 0.124-0.409 0.373-0.409 0.66s0.165 0.537 0.405 0.659l0.004 0.002 4.035 2.016-1.427 4.281c-0.025 0.070-0.039 0.151-0.039 0.236 0 0.406 0.33 0.736 0.736 0.736 0.084 0 0.166-0.014 0.241-0.040l-0.005 0.002 4.278-1.427 2.016 4.035c0.124 0.244 0.373 0.409 0.66 0.409s0.537-0.165 0.659-0.405l0.002-0.004 2.016-4.035 4.276 1.427c0.070 0.025 0.151 0.039 0.236 0.039 0.406 0 0.736-0.33 0.736-0.736 0-0.084-0.014-0.166-0.040-0.241l0.002 0.005-1.427-4.278 4.035-2.016c0.249-0.122 0.417-0.374 0.417-0.665 0-0.287-0.164-0.536-0.404-0.659l-0.004-0.002zM19.838 19.838c-0.987 0.987-2.35 1.597-3.856 1.597-3.012 0-5.453-2.441-5.453-5.453s2.441-5.453 5.453-5.453c1.506 0 2.869 0.61 3.856 1.597v0c0.985 0.988 1.595 2.351 1.595 3.856s-0.609 2.868-1.595 3.856l0-0z",
  clouds_sun:
    "M24.196 18.708h-0.068c-0.321-1.567-1.688-2.729-3.327-2.729-1.049 0-1.986 0.476-2.608 1.224l-0.004 0.006c-0.8-1.55-2.39-2.591-4.223-2.591-2.473 0-4.503 1.894-4.719 4.311l-0.001 0.018c-1.627 0.561-2.774 2.078-2.774 3.864 0 2.252 1.826 4.078 4.078 4.078 0.004 0 0.009 0 0.013-0h13.634c2.259 0 4.090-1.831 4.090-4.090s-1.831-4.090-4.090-4.090v0zM26.242 11.892h-0.75c-0.329-1.567-1.699-2.727-3.34-2.727s-3.012 1.16-3.337 2.704l-0.004 0.022h-0.75c-0.001 0-0.003 0-0.005 0-1.166 0-2.195 0.588-2.808 1.483l-0.008 0.012c1.285 0.28 2.387 0.934 3.217 1.84l0.004 0.005c0.668-0.388 1.471-0.617 2.326-0.618h0c1.923 0.004 3.579 1.141 4.338 2.778l0.012 0.030c0.897 0.166 1.689 0.531 2.356 1.049l-0.012-0.009c1.281-0.507 2.17-1.735 2.17-3.17 0-1.878-1.523-3.401-3.401-3.401-0.004 0-0.007 0-0.011 0h0.001zM8.019 17.993c0.116-0.473 0.27-0.886 0.464-1.275l-0.016 0.035c-1.214-0.713-2.015-2.012-2.015-3.498 0-1.133 0.466-2.158 1.218-2.892l0.001-0.001c0.741-0.739 1.764-1.195 2.893-1.195s2.152 0.457 2.893 1.195l-0-0c0.481 0.487 0.839 1.097 1.021 1.778l0.006 0.028c0.258-0.299 0.546-0.56 0.863-0.783l0.015-0.010 1.12-3.34c0.018-0.052 0.029-0.113 0.029-0.175 0-0.306-0.248-0.553-0.553-0.553-0.064 0-0.126 0.011-0.183 0.031l0.004-0.001-3.208 1.070-1.513-3.025c-0.093-0.183-0.28-0.306-0.496-0.306s-0.403 0.123-0.495 0.303l-0.001 0.003-1.513 3.025-3.209-1.070c-0.052-0.018-0.113-0.028-0.176-0.028-0.308 0-0.557 0.249-0.557 0.557 0 0.063 0.010 0.123 0.030 0.18l-0.001-0.004 1.069 3.208-3.024 1.512c-0.183 0.093-0.306 0.28-0.306 0.496s0.123 0.403 0.303 0.495l0.003 0.001 3.025 1.513-1.070 3.209c-0.018 0.052-0.028 0.113-0.028 0.176 0 0.308 0.249 0.557 0.557 0.557 0.063 0 0.123-0.010 0.18-0.030l-0.004 0.001 1.819-0.605c0.251-0.209 0.531-0.401 0.829-0.566l0.027-0.014zM7.835 13.255c0.003 0.994 0.539 1.862 1.338 2.332l0.013 0.007c0.982-1.248 2.427-2.094 4.072-2.277l0.027-0.002c0-0.021 0.004-0.038 0.004-0.060 0-1.506-1.221-2.727-2.727-2.727s-2.727 1.221-2.727 2.727v0z",
  sun_cloud:
    "M26.919 14.618c-0.515 0.003-0.996 0.148-1.405 0.399l0.012-0.007c-0.148-1.754-1.607-3.121-3.387-3.121-1.643 0-3.013 1.166-3.329 2.715l-0.004 0.022c-0.021 0-0.043-0.009-0.068-0.009-1.506 0-2.727 1.221-2.727 2.727s1.221 2.727 2.727 2.727v0h8.181c1.506 0 2.727-1.221 2.727-2.727s-1.221-2.727-2.727-2.727v0zM20.673 21.434h-1.934c-0.947-0.004-1.817-0.333-2.504-0.88l0.008 0.006c-0.835 0.547-1.858 0.872-2.957 0.872-3.010 0-5.451-2.44-5.451-5.451s2.44-5.451 5.451-5.451c1.506 0 2.869 0.611 3.856 1.598l0 0c0.288 0.293 0.543 0.62 0.758 0.973l0.013 0.024c0.567-1.080 1.501-1.903 2.634-2.312l0.033-0.011 0.592-1.777c0.024-0.070 0.038-0.151 0.038-0.235 0-0.406-0.33-0.736-0.736-0.736-0.085 0-0.166 0.014-0.241 0.040l0.005-0.002-4.278 1.427-2.015-4.039c-0.124-0.245-0.373-0.409-0.66-0.409s-0.537 0.165-0.659 0.405l-0.002 0.004-2.016 4.035-4.281-1.427c-0.070-0.025-0.152-0.039-0.236-0.039-0.406 0-0.736 0.33-0.736 0.736 0 0.084 0.014 0.166 0.040 0.241l-0.002-0.005 1.427 4.278-4.035 2.020c-0.244 0.124-0.409 0.373-0.409 0.66s0.165 0.537 0.405 0.659l0.004 0.002 4.035 2.016-1.427 4.281c-0.025 0.070-0.039 0.151-0.039 0.236 0 0.406 0.33 0.736 0.736 0.736 0.084 0 0.166-0.014 0.241-0.040l-0.005 0.002 4.278-1.427 2.016 4.035c0.124 0.244 0.373 0.409 0.66 0.409s0.537-0.165 0.659-0.405l0.002-0.004 2.016-4.035 4.276 1.427c0.070 0.025 0.151 0.039 0.236 0.039 0.406 0 0.736-0.33 0.736-0.736 0-0.084-0.014-0.166-0.040-0.241l0.002 0.005zM16.732 13.796c-0.737-1.17-2.022-1.936-3.485-1.936-2.268 0-4.106 1.838-4.106 4.106s1.838 4.106 4.106 4.106c0.753 0 1.458-0.203 2.065-0.556l-0.020 0.011c-0.403-0.619-0.643-1.377-0.643-2.19 0-1.515 0.832-2.835 2.063-3.53l0.020-0.011z",
  humidity:
    "M17.82 3.718c-0.456-1.51-2.826-1.578-3.345 0-2.675 8.269-8.395 10.518-8.395 16.349 0 5.16 4.504 9.339 10.068 9.339s10.068-4.179 10.068-9.339c0-5.856-5.71-8.038-8.395-16.349zM11.114 17.661c0-0.927 0.751-1.678 1.678-1.678s1.678 0.751 1.678 1.678c0 0.927-0.751 1.678-1.678 1.678v0c-0.001 0-0.001 0-0.002 0-0.926 0-1.676-0.75-1.676-1.676 0-0.001 0-0.001 0-0.002v0zM13.709 24.573c-0.076 0.097-0.193 0.158-0.325 0.158-0.1 0-0.192-0.036-0.263-0.095l0.001 0.001-0.655-0.524c-0.096-0.077-0.157-0.194-0.157-0.325 0-0.1 0.035-0.191 0.093-0.263l-0.001 0.001 6.189-7.736c0.077-0.096 0.194-0.157 0.325-0.157 0.1 0 0.191 0.035 0.263 0.093l-0.001-0.001 0.655 0.524c0.097 0.076 0.158 0.193 0.158 0.325 0 0.1-0.036 0.192-0.095 0.263l0.001-0.001zM19.504 24.373c-0.927 0-1.678-0.751-1.678-1.678s0.751-1.678 1.678-1.678c0.927 0 1.678 0.751 1.678 1.678v0c0 0 0 0.001 0 0.001 0 0.926-0.75 1.676-1.676 1.676-0.001 0-0.001 0-0.002 0h0z",
  precipitation:
    "M15.486 9.629c0-1.83-1.668-2.512-2.449-5.107-0.065-0.211-0.259-0.362-0.488-0.362s-0.422 0.151-0.487 0.359l-0.001 0.004c-0.781 2.585-2.449 3.288-2.449 5.107 0 1.622 1.315 2.936 2.936 2.936s2.936-1.315 2.936-2.936v0zM6.609 14.59c-0.781 2.585-2.449 3.288-2.449 5.107 0 1.622 1.315 2.936 2.936 2.936s2.936-1.315 2.936-2.936v0c0-1.83-1.668-2.512-2.449-5.107-0.065-0.212-0.259-0.363-0.488-0.363s-0.423 0.151-0.487 0.359l-0.001 0.004zM22.051 9.991c-0.163-0.467-0.6-0.797-1.114-0.797s-0.951 0.329-1.112 0.788l-0.003 0.008c-1.783 5.684-5.595 7.232-5.595 11.242 0 3.55 2.999 6.418 6.712 6.418s6.712-2.874 6.712-6.418c0-4.032-3.807-5.532-5.6-11.242z",
  direction:
    "M17.24 5.68l8.2 19.987c0.453 1.107-0.68 2.213-1.773 1.72l-7.12-3.147c-0.347-0.147-0.733-0.147-1.080 0l-7.12 3.147c-1.093 0.48-2.227-0.613-1.773-1.72l8.2-19.987c0.44-1.107 2.013-1.107 2.467 0z",
  pressure:
    "M5.333 13.333v0c0 0.733 0.6 1.333 1.333 1.333h18.667c0.733 0 1.333-0.6 1.333-1.333v0c0-0.733-0.6-1.333-1.333-1.333h-18.667c-0.733 0-1.333 0.6-1.333 1.333z M19.72 5.333h-2.387v-2.667c0-0.733-0.6-1.333-1.333-1.333v0c-0.733 0-1.333 0.6-1.333 1.333v2.667h-2.387c-0.6 0-0.893 0.72-0.48 1.133l3.72 3.72c0.267 0.267 0.68 0.267 0.947 0l3.72-3.72c0.427-0.413 0.133-1.133-0.467-1.133z M12.28 25.333h2.387v2.667c0 0.733 0.6 1.333 1.333 1.333v0c0.733 0 1.333-0.6 1.333-1.333v-2.667h2.387c0.6 0 0.893-0.72 0.467-1.133l-3.72-3.72c-0.267-0.267-0.68-0.267-0.947 0l-3.72 3.72c-0.413 0.413-0.12 1.133 0.48 1.133z M6.667 18.667h18.667c0.733 0 1.333-0.6 1.333-1.333v0c0-0.733-0.6-1.333-1.333-1.333h-18.667c-0.733 0-1.333 0.6-1.333 1.333v0c0 0.733 0.6 1.333 1.333 1.333z",
};

export default icons;
