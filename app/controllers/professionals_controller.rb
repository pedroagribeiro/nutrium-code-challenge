class ProfessionalsController < ApplicationController
  before_action :set_professional, only: %i[ show edit update destroy ]

  def index
    professionals = Professional.includes(:professional_category, :services).all
    render inertia: 'Professionals/Index', props: {
      professionals: professionals.as_json(include: [:professional_category, :services])
    }
  end

  def show
  end

  def new
    @professional = Professional.new
  end

  def create
    @professional = Professional.new
    if @professional.save
      redirect_to @professional
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @professional.update(professional_params)
      redirect_to @profesional
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @professional.destroy
    redirect_to professionals_path
  end

  private
    def set_professional
      @professional = Professional.find(params[:id])
    end

    def professional_params
      params.expect(professional: [:name, :license_number, :professional_category_id])
    end
end
