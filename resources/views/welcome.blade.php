<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        <!-- Font Awesome -->
        <link rel="stylesheet" href="{{asset('/fontawesome-free/css/all.min.css')}}">
        <!-- icheck bootstrap -->
        <link rel="stylesheet" href="{{asset('icheck-bootstrap/icheck-bootstrap.min.css')}}">
        <!-- Theme style -->
        <link rel="stylesheet" href="{{asset('css/adminlte.min.css')}}">
        <link rel="stylesheet" href="{{asset('toastr/toastr.min.css')}}">
    </head>
    <body class="hold-transition login-page">
        <div class="login-box">
            <div class="container">
                <div>
                    <div class="card">
                      <div class="card-body login-card-body">
                        <p class="login-box-msg">Sign in to start your session</p>
                        <form onsubmit="{handleSubmit(enviar)}">
                          <div class="input-group mb-3">
                            <input type="email" name="email" class="form-control" placeholder="Email" {...register('email')} />
                            <div class="input-group-append">
                              <div class="input-group-text">
                                <span class="fas fa-envelope">
                                </span></div>
                            </div>
                          </div>
                          <div class="input-group mb-3">
                            <input type="password" name="password" class="form-control" placeholder="Password" {...register('password')} />
                            <div class="input-group-append">
                              <div class="input-group-text">
                                <span class="fas fa-lock">
                                </span></div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-8">
                              <div class="icheck-primary">
                                <input type="checkbox" id="remember" />
                                <label htmlfor="remember">
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <div class="col-4">
                              <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                
            </div>
        </div>
        
            <script src="{{asset('/jquery/jquery.js')}}"></script>
            <script src="{{asset('/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
            <script src="{{asset('/bootstrap/js/adminlte.js')}}"></script>
            <script src="{{asset('toastr/toastr.min.js')}}"></script>
            <script>
                $(document).ready(function(){
                    alert("llego");
                })
            </script>

    </body>
</html>
