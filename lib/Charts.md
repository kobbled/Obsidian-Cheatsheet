
>[!note]
>Uses [Charts View](https://github.com/caronchen/obsidian-chartsview-plugin) package

```chartsview
#-----------------#
#- chart type    -#
#-----------------#
type: Pie

#-----------------#
#- chart data    -#
#-----------------#
data:
  - type: "Wage income per capita (¥)"
    value: 10000
  - type: "Operating net income per capita (¥)"
    value: 5307
  - type: "Property Per Capita Net Income (¥)"
    value: 2791
  - type: "Transfer of net income per capita (¥)"
    value: 6173

#-----------------#
#- chart options -#
#-----------------#
options:
  angleField: "value"
  colorField: "type"
  radius: 0.5
  label:
    type: "spider"
    content: "{percentage}\n{name}"
  legend:
    layout: "horizontal"
    position: "bottom"
```


```chartsview
#-----------------#
#- chart type    -#
#-----------------#
type: DualAxes

#-----------------#
#- chart data    -#
#-----------------#
data:
  -
    - time: "2019-03"
      value: 350
      count: 800
    - time: "2019-04"
      value: 900
      count: 600
    - time: "2019-05"
      value: 300
      count: 400
    - time: "2019-06"
      value: 450
      count: 380
    - time: "2019-07"
      value: 470
      count: 22
  -
    - time: "2019-03"
      value: 350
      count: 800
    - time: "2019-04"
      value: 900
      count: 600
    - time: "2019-05"
      value: 300
      count: 400
    - time: "2019-06"
      value: 450
      count: 380
    - time: "2019-07"
      value: 470
      count: 22

#-----------------#
#- chart options -#
#-----------------#
options:
  xField: 'time'
  yField: ['value', 'count']
  yAxis:
    value:
      min: 0
      label:
        formatter:
          function formatter(val) {
            return ''.concat(val, '个');
          }
  geometryOptions:
    - geometry: 'column'
    - geometry: 'line'
      lineStyle:
        lineWidth: 2
```


```chartsview
#-----------------#
#- chart type    -#
#-----------------#
type: OrganizationTreeGraph

#-----------------#
#- chart data    -#
#-----------------#
data:
  id: "root"
  label: "Root"
  children:
    - id: "c1"
      label: "C1"
      children:
        - id: "c1-1"
          label: "C1-1"
          children:
            - id: "c1-1-1"
              label: "C1-1-1"
            - id: "c1-1-2"
              label: "C1-1-2"
        - id: "c1-2"
          label: "C1-2"
          children:
            - id: "c1-2-1"
              label: "C1-2-1"
            - id: "c1-2-2"
              label: "C1-2-2"
    - id: "c2"
      label: "C2"
      children:
        - id: "c2-1"
          label: "C2-1"
          children:
            - id: "c2-1-1"
              label: "C2-1-1"

#-----------------#
#- chart options -#
#-----------------#
options: {}
```