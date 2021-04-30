(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=p(a),u=r,d=b["".concat(l,".").concat(u)]||b[u]||m[u]||i;return a?n.a.createElement(d,s(s({ref:t},c),{},{components:a})):n.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),i=(a(0),a(100)),l={id:"operations",title:"Jetstream Architecture and Operations"},s={unversionedId:"jetstream/operations",id:"jetstream/operations",isDocsHomePage:!1,title:"Jetstream Architecture and Operations",description:"[Jetstream] is part of the Cirrus ecosystem and depends on some external services.",source:"@site/docs/jetstream/operations.md",sourceDirName:"jetstream",slug:"/jetstream/operations",permalink:"/jetstream/operations",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/jetstream/operations.md",version:"current",frontMatter:{id:"operations",title:"Jetstream Architecture and Operations"},sidebar:"sidebar",previous:{title:"Jetstream Data Products",permalink:"/jetstream/data-products"},next:{title:"Troubleshooting Jetstream",permalink:"/jetstream/troubleshooting"}},o=[{value:"Architecture for Scaling Jetstream",id:"architecture-for-scaling-jetstream",children:[{value:"Parallelizing experiment analyses",id:"parallelizing-experiment-analyses",children:[]},{value:"Parallelizing lower-level calculations",id:"parallelizing-lower-level-calculations",children:[]}]},{value:"Setup",id:"setup",children:[]}],c={toc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"https://github.com/mozilla/jetstream"},"Jetstream"))," is part of the Cirrus ecosystem and depends on some external services."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://github.com/mozilla/experimenter-docs/blob/main/static/img/jetstream/cirrus.png",alt:"Cirrus overview"}),"\n",Object(i.b)("em",{parentName:"p"},"High-level overview of Cirrus")),Object(i.b)("p",null,"Jetstream is ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mozilla/telemetry-airflow/blob/e5de501d8063cc366e9bb546135f3866136cb47d/dags/jetstream.py#L22"},"scheduled to run in Airflow")," daily. The daily runs will analyze all experiments that are currently active or just ended the day before and write metrics, statistics and errors for each experiment to BigQuery. Active V1 experiments and V6 experiments (Nimbus experiments) are retrieved from the ",Object(i.b)("a",{parentName:"p",href:"https://experimenter.services.mozilla.com/api/v1/experiments/"},"Experimenter API"),"."),Object(i.b)("p",null,"Jetstream also fetches custom experiment and outcome configs from ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream-config"},"jetstream-config")," for analysis. When a new custom config gets merged into jetstream-config, the CI will trigger Jetstream to re-run all analyses for the experiment affected by the config. CircleCI will report on the status of the analysis run and link to the Cloud Logging logs."),Object(i.b)("p",null,"After writing analyses results to BigQuery, statistics data is exported to the ",Object(i.b)("inlineCode",{parentName:"p"},"mozanalysis")," bucket in GCS as JSON. The JSON data is accessed by the analysis dashboard to display results."),Object(i.b)("h2",{id:"architecture-for-scaling-jetstream"},"Architecture for Scaling Jetstream"),Object(i.b)("p",null,"To ensure analysis results are available in a timely manner, Jetstream implements two approaches for reducing the time required to run experiment analyses:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Parallelization of experiment analyses using ",Object(i.b)("a",{parentName:"li",href:"https://argoproj.github.io/"},"Argo")),Object(i.b)("li",{parentName:"ul"},"Parallelization of lower-level calculations (statistics, segments, ...) using ",Object(i.b)("a",{parentName:"li",href:"https://dask.org/"},"Dask"))),Object(i.b)("h3",{id:"parallelizing-experiment-analyses"},"Parallelizing experiment analyses"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://argoproj.github.io/"},"Argo")," is a light-weight workflow engine for orchestrating parallel jobs on Kubernetes and is capable of creating tasks dynamically that will be executed in parallel. Using Argo, the analyses for different experiments and analysis dates are split into separate jobs that run in parallel on the ",Object(i.b)("inlineCode",{parentName:"p"},"jetstream")," Kubernetes cluster in the ",Object(i.b)("inlineCode",{parentName:"p"},"moz-fx-data-experiment-analysis")," GCP project."),Object(i.b)("p",null,"Argo expects each step in the workflow to be a container. The existing Jetstream container, which has the Jetstream CLI installed, can be used for each of these steps.\nThe full workflow definition is defined in ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream/blob/main/jetstream/workflows/run.yaml"},"the ",Object(i.b)("inlineCode",{parentName:"a"},"workflows/run.yaml")," file"),"."),Object(i.b)("p",null,"Depending on how Jetstream is invoked (",Object(i.b)("inlineCode",{parentName:"p"},"rerun"),", ",Object(i.b)("inlineCode",{parentName:"p"},"run-argo"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"rerun_config_changed"),"), Jetstream will determine the dates and experiments that are to be analyzed and injects them as parameters into ",Object(i.b)("inlineCode",{parentName:"p"},"run.yaml")," before launching the workflow. Argo will create separate jobs for each experiment and each analysis date. Once the analysis is complete, data gets exported as JSON to GCS."),Object(i.b)("h3",{id:"parallelizing-lower-level-calculations"},"Parallelizing lower-level calculations"),Object(i.b)("p",null,"In addition to running experiment analyses in parallel, ",Object(i.b)("a",{parentName:"p",href:"https://dask.org/"},"Dask")," is used to parallelize lower-level calculations. The following steps could be executed in parallel:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Analyses for each analysis period (daily, 28day, weekly, overall)"),Object(i.b)("li",{parentName:"ul"},"Analyses for different segments"),Object(i.b)("li",{parentName:"ul"},"Calculating statistics defined for an experiment analysis")),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://docs.dask.org/en/latest/delayed.html"},Object(i.b)("inlineCode",{parentName:"a"},"dask.delayed interface"))," is used to turn the functions executing these steps into tasks that are added to a task graph which executes these steps in parallel. Dask is configured to use as many cores as are available on the machine by default, with 1 worker for each core. ",Object(i.b)("a",{parentName:"p",href:"https://docs.dask.org/en/latest/scheduling.html#local-threads"},"Multi-threading being avoided, instead processes are used")," since the code is dominated by Python code, otherwise there wouldn't be any speedup due Python's Global Interpreter Lock. To manually restrict the number of processes, the ",Object(i.b)("inlineCode",{parentName:"p"},"JETSTREAM_PROCESSES")," environment variable can be used."),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("p",null,"Jetstream is executed on the ",Object(i.b)("inlineCode",{parentName:"p"},"jetstream")," Kubernetes cluster in the ",Object(i.b)("inlineCode",{parentName:"p"},"moz-fx-data-experiments")," project which is set up following ",Object(i.b)("a",{parentName:"p",href:"https://github.com/argoproj/argo/blob/master/docs/quick-start.md"},"Argo's installation guide"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When creating or re-creating the cluster, Bigquery and Compute Engine read/write permissions need to be enabled"),Object(i.b)("li",{parentName:"ul"},"Installing Argo:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Create an ",Object(i.b)("inlineCode",{parentName:"li"},"argo")," namespace: ",Object(i.b)("inlineCode",{parentName:"li"},"kubectl create ns argo")),Object(i.b)("li",{parentName:"ul"},"Install commonly used components: ",Object(i.b)("inlineCode",{parentName:"li"},"kubectl apply -n argo -f https://raw.githubusercontent.com/argoproj/argo/stable/manifests/quick-start-postgres.yaml")),Object(i.b)("li",{parentName:"ul"},"Create new ",Object(i.b)("inlineCode",{parentName:"li"},"clusterrole"),": ",Object(i.b)("inlineCode",{parentName:"li"},"kubectl create rolebinding default-admin --clusterrole=admin --serviceaccount=argo:default --namespace=argo")))),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",{parentName:"li",href:"https://github.com/mozilla/telemetry-airflow/blob/master/dags/jetstream.py"},Object(i.b)("inlineCode",{parentName:"a"},"jetstream")," DAG in Airflow")," triggers the ",Object(i.b)("inlineCode",{parentName:"li"},"run-argo")," job daily and either requires Compute Engine API access or the parameters ",Object(i.b)("inlineCode",{parentName:"li"},"cluster_ip")," and ",Object(i.b)("inlineCode",{parentName:"li"},"cluster_cert")," need to be provided",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Currently the Airflow cluster does not have Compute Engine API access, so the cluster IP and certificate are stored as secrets and used for running Jetstream")))))}p.isMDXComponent=!0}}]);