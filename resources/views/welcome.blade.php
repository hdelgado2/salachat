<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <!-- Font Awesome -->
        <link rel="stylesheet" href="{{asset('/fontawesome-free/css/all.min.css')}}">
        <!-- icheck bootstrap -->
        <link rel="stylesheet" href="{{asset('icheck-bootstrap/icheck-bootstrap.min.css')}}">
        <!-- Theme style -->
        <link rel="stylesheet" href="{{asset('css/adminlte.min.css')}}">
    </head>
    <body class="hold-transition login-page">
        <div class="login-box">
            <div class="container">
                
                <div id="example"></div>
            </div>
        </div>
        
        <script src="{{asset('/jquery/jquery.js')}}"></script>
            <script src="{{asset('/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
            <script src="{{asset('/bootstrap/js/adminlte.js')}}"></script>
            <script src="/js/app.js"></script>

    </body>
</html>
