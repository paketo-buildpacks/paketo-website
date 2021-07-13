This documentation explains how to use the {{ with .Get "bp_name" }}
[{{ . }}{{ end }}]({{ with .Get "bp_repo" }}{{ . }}{{ end }})
to build applications for several common use-cases. For more in-depth
description of the buildpack's behavior and configuration see the {{ with .Get "bp_name" }} {{ . }} {{ end }}
Reference [documentation]({{ with .Get "reference_docs_path" }} {{ . }} {{ end }}).