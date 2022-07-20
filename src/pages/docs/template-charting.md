---
title: Get Started with the Charting Template
description: Learn how to send different data sets to your widget..
---

This page describes the steps for using the charting template.

## Get the template

1. The template is found [here](https://github.com/integrating-magic/charting-starter)
2. Make sure you're signed in and click "Use this Template". Follow the prompts to create a new repository.
3. The template will transfer to your account as a new repository.
4. Finally clone the repo to your machine.

{% callout type="note" title="Check out the documentation" %}
The [documentation](/docs/indepth-process) is found here. You might need to use it for awhile at the beginning, but soon this process will be second nature to you.
{% /callout %}

## Set up the instance

1. Open the repository in VSCode
2. Open the terminal pane (Ctrl+`)
3. Run `npm install`
4. Run `npm start`
5. Opn the FileMaker file (jsDev.fmp12)

## Connect code to the real app

It's okay to start working on the chart before you put this into your client app. But at some point you need real data. So let's connect this environment to your app.

To do so, do these five things:

1. Copy the HTML from the jsDev.fmp12 file to your client file.
   -Create a record in this table.
2. Create a layout where the web viewer will reside. Most likely the context will be that HTML table, but in the case it isn't check out how to handle it when your web viewer has to be on a different context.
3. Copy the scripts in the "Web Viewer Scripts" folder to your client file.
4. Copy and paste the layout objects in the jsDev file onto the the layout where the web viewer will go.

## Configuration

### In the FileMaker File

There are three scripts in the "Config" folder you will modify.

1. Get Data
   - In this script you work to get the data. So modify it as you see fit, making sure that your end result is what the library needs.
2. Set Chart Type
   - A simple sub script that sets the chart type.
3. Set Script Callback Name
   - A simple script that sets the callback script name. This script is called when a user clicks on the data point of the chart.

Each of these scripts is called by the main script "Load Chart". You don't need to update this main script.

### In the JavaScipt

Most of the configuration of the chart itself is found in the JS. Here's a sample:

```javascript
const options = {
    colors: ["#F7DF1E", "#1D91B2"],
    // stroke: {
    //   curve: "smooth",
    //   width: 2,
    //   dashArray: 5,
    // },
    // grid: { show: false },
    // plotOptions: {
    //bar: { horizontal: true, dataLabels: { position: "bottom" } },
    // },
    // markers: { size: 3 },
    // dataLabels: {
    //   enabled: true,
    //   background: { enabled: true, foreColor: "black" },
    //   offsetX: 20,
    // },
    legend: {
      show: true,
      position: "left",
      horizontalAlign: "right",
    },
    chart:{...},
    xaxis: {
      type: "category",
    },
  };
```

As you study this you will find that it is readable and editable. What you edit here will cause the chart to change. I have only included a few options here, but there's a [ton](https://apexcharts.com/docs) more to use.

## Get data

In this section you need to get data from the table in question and format it as the library needs. Here's an example of what the chart can use:

```json
[
  { "x": "Jan 2022", "y": 3 },
  { "x": "Feb 2022", "y": 9 },
  { "x": "Mar 2022", "y": 12 },
  { "x": "Apr 2022", "y": 3 },
  { "x": "Mar 2022", "y": 7 }
]
```

However you take your data and convert it is up to you. This starter file comes with the script `SAMPLE Get Data to Chart`. In this I provide my method.
Some details:

- I am using the [Execute Data API](https://help.claris.com/en/pro-help/content/execute-filemaker-data-api.html) (EDAPI) script step to get the data from the table. One script `Construct Query` is used to construct the query. Another script called `Run Query` runs the query and returns the data to the main script.
- There's a script called `Construct Array for Chart` that converts the result of the Data API script step to the format the chart library needs.
- There are three variables at the top of the script that need to be filled in with values:
  - `$uniqueSeries`: A list of the unique series you want to include in the chart.
    - If you do have more than one series, you'll need to update the `Construct Query` script to include the series in the list.
  - `$pathToXCategory`: the path to the field in the EDAPI result that contains the X-axis category.
  - `$valueToYValue`: the path to the field in the EDAPI result that contains the Y-axis value.

## Deploy

Once you're done with making this chart fit your data and you have configured it properly, deploy it to the client app. Follow these [instructions](/docs/deploy-the-code) about deploying.
